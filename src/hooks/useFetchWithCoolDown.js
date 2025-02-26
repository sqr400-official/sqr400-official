import { useState, useEffect, useCallback } from "react";

const useFetchWithCoolDown = (
  fetchFunction,
  storageKey = "lastFetchTimestamp",
  coolDown = 10000 // 10 seconds
) => {
  const [isFetchingAllowed, setIsFetchingAllowed] = useState(false);

  // Check local storage for cool down
  const checkFetchPermission = useCallback(() => {
    const lastFetch = localStorage.getItem(storageKey);
    const now = Date.now();

    if (!lastFetch || now - Number(lastFetch) > coolDown) {
      setIsFetchingAllowed(true);
    } else {
      setIsFetchingAllowed(false);
    }
  }, [storageKey, coolDown]);

  // Fetch data if allowed
  const fetchData = useCallback(async () => {
    if (!isFetchingAllowed) return;

    try {
      await fetchFunction(); // Execute the fetch
      localStorage.setItem(storageKey, Date.now()); // Update coolDown timestamp
      setIsFetchingAllowed(false); // Disable further requests until coolDown expires
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  }, [fetchFunction, isFetchingAllowed, storageKey]);

  // Run check on mount
  useEffect(() => {
    checkFetchPermission();
  }, [checkFetchPermission]);

  return { isFetchingAllowed, fetchData };
};

export default useFetchWithCoolDown;

// The hook is designed to be used with a function that fetches data from an API. It takes three arguments:

// fetchFunction : The function that fetches the data.
// storageKey : The key to use for storing the last fetch timestamp in local storage.
// cool down : The cool down period in milliseconds.

// The hook returns an object with two properties:

// isFetchingAllowed : A boolean indicating whether a new fetch request is allowed.
// fetchData : A function that triggers the fetch request if  isFetchingAllowed  is  true .

// The hook works as follows:

// It checks the local storage for the last fetch timestamp and compares it to the cool down period. If the cool down has expired, it allows a new fetch request.
// If a new fetch request is allowed, it calls the  fetchFunction  to fetch the data.
// After fetching the data, it updates the last fetch timestamp in local storage and disables further fetch requests until the cool down expires.

// You can use this hook in your components to fetch data from an API with a cool down period. Here's an example of how you can use the  useFetchWithCoolDown  hook:
