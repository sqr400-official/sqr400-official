import { useEffect, useState } from "react";
import styles from "./SignIn.module.css";
import { useAuth } from "../hooks/useAuth";
import { useNavigate } from "react-router-dom";
import Toast from "../components/Toast";

const SignIn = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showToast, setShowToast] = useState(false);
  const [toastMessage, setToastMessage] = useState({ message: "", type: "" }); // ✅ Add this line

  const { login, isAuthenticated, FAKE_USER } = useAuth();
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    let message = "";
    let type = "";

    if (!email || !password) {
      message = "Please fill in all fields!";
      type = "error";
    } else if (email === FAKE_USER.email && password === FAKE_USER.password) {
      login(email, password);
      message = "Login successful!";
      type = "success";
    } else {
      message = "Wrong credentials. Please try again.";
      type = "error";
    }

    setToastMessage({ message, type });
    setShowToast(true);

    setTimeout(() => setShowToast(false), 5000);
  };

  useEffect(() => {
    if (isAuthenticated) {
      navigate("/admin", { replace: true });
    }
  }, [isAuthenticated, navigate]);

  return (
    <div className={styles.signInContainer}>
      <form onSubmit={handleSubmit} className={styles.signInContainerForm}>
        <h2>Sign In</h2>
        <label htmlFor="email">Email:</label>
        <input
          id="email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          autoComplete="email"
          autoFocus
        />

        <label htmlFor="password">Password:</label>
        <input
          id="password"
          type={showPassword ? "text" : "password"}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          autoComplete="current-password"
        />

        <div className={styles.showPasswordToggle}>
          <button type="button" onClick={() => setShowPassword(!showPassword)}>
            {showPassword ? "Hide" : "Show"}
          </button>
        </div>
        <button type="submit">Sign In</button>
      </form>
      {showToast && (
        <Toast message={toastMessage.message} type={toastMessage.type} />
      )}
    </div>
  );
};

export default SignIn;
