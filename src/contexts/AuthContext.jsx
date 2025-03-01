import { createContext, useReducer, useEffect } from "react";

export const AuthContext = createContext();

const FAKE_USER = {
  email: "johndoe@example.com",
  password: "password123",
};

const SESSION_DURATION = 24 * 60 * 60 * 1000; // 1 day in milliseconds

const initialState = {
  user: JSON.parse(localStorage.getItem("user")) || null,
  isAuthenticated: !!localStorage.getItem("user"),
};

const authReducer = (state, action) => {
  switch (action.type) {
    case "login":
      const expiresAt = Date.now() + SESSION_DURATION;
      localStorage.setItem("user", JSON.stringify(action.payload));
      localStorage.setItem("expiresAt", expiresAt);
      return { ...state, user: action.payload, isAuthenticated: true };

    case "logout":
      localStorage.removeItem("user");
      localStorage.removeItem("expiresAt");
      return { ...state, user: null, isAuthenticated: false };

    default:
      throw new Error("Invalid action type");
  }
};

export const AuthProvider = ({ children }) => {
  const [state, dispatch] = useReducer(authReducer, initialState);
  const { user, isAuthenticated } = state;

  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem("user"));
    const expiresAt = localStorage.getItem("expiresAt");

    if (storedUser && expiresAt) {
      if (Date.now() > parseInt(expiresAt, 10)) {
        dispatch({ type: "logout" }); // ✅ Auto-logout on expiration
      } else {
        dispatch({ type: "login", payload: storedUser });
      }
    }
  }, []);

  const login = (email, password) => {
    if (email === FAKE_USER.email && password === FAKE_USER.password) {
      dispatch({ type: "login", payload: FAKE_USER });
    }
  };

  const logout = () => {
    dispatch({ type: "logout" });
  };

  return (
    <AuthContext.Provider value={{ user, login, logout, isAuthenticated, FAKE_USER }}>
      {children}
    </AuthContext.Provider>
  );
};
