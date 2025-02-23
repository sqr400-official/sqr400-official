/* eslint-disable react/prop-types */
import { createContext, useState, useContext } from "react";
import reviewsData from "../../data/reviews";
import productData from "../../data/data";
import walletsData from "../../data/wallets";

// Create the context
const ProductContext = createContext();

// Create a provider component
export const ProductProvider = ({ children }) => {
  const [products, setProducts] = useState(productData);
  const [reviews, setReviews] = useState(reviewsData);
  const [wallets, setWallets] = useState(walletsData);

    // Function to get reviews for a specific product
    const getProductReviews = (productId) => {
      return reviews.find((review) => review.productId === productId)?.reviews || [];
    };
  
  return (
    <ProductContext.Provider
      value={{
        products,
        setProducts,
        reviews,
        setReviews,
        wallets,
        setWallets,
        getProductReviews,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
};

// Create a custom hook to use the ProductContext
export const useProductContext = () => {
  return useContext(ProductContext);
};
