/* eslint-disable react/prop-types */
import { useState, useEffect } from "react";
import styles from "./Toast.module.css";

const Toast = ({ message, type = "info", duration = 5000 }) => {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setVisible(false), duration);
    return () => clearTimeout(timer);
  }, [duration]);

  if (!visible) return null; // Hide toast when the state is false

  return <div className={`${styles.toast} ${styles[type]}`}>{message}</div>;
};

export default Toast;
