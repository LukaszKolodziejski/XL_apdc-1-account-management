import React from "react";
import styles from "./SingleAccount.module.css";

const SingleAccount = (props) => {
  const { userId, email, profile, state, role } = props;
  return (
    <div className={styles.SingleAccount}>
      <span>{userId}</span>
      <span>{email}</span>
      <span>{profile}</span>
      <span>{state}</span>
      <span>{role}</span>
    </div>
  );
};

export default SingleAccount;
