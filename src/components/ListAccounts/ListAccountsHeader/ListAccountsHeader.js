import React from "react";
import styles from "./ListAccountsHeader.module.css";

const ListAccountsHeader = () => {
  return (
    <p className={styles.ListAccountsHeader}>
      <span>User ID</span>
      <span>E-mail</span>
      <span>Profile</span>
      <span>State</span>
      <span>Role</span>
    </p>
  );
};

export default ListAccountsHeader;
