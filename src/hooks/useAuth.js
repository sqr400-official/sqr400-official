import { useContext } from "react";
import { AuthContext } from "../contexts/AuthContext";

export const useAuth = () => {
  const context = useContext(AuthContext);
  console.log("AuthContext value:", context); // Debugging
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};
