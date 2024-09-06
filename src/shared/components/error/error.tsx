import React from "react";
import styles from "@shared/components/error/error.module.css";

interface ErrorProps {
  message: string;
}
export const Error: React.FC<ErrorProps> = ({ message }) => {
  return <div className={styles["error-message"]}>{message}</div>;
};
