import React from "react";
import styles from "./ListAccountsHeader.module.css";

const ListAccountsHeader = (props) => {
  const showSection = props.role === "USER";
  return (
    <p className={styles.ListAccountsHeader}>
      <span>User ID</span>
      <span>E-mail</span>
      <span>Profile</span>
      {showSection ? <span>State</span> : null}
      {showSection ? <span>Role</span> : null}
    </p>
  );
};

export default ListAccountsHeader;
