import React from "react";
import styles from "./SingleAccount.module.css";

const SingleAccount = (props) => {
  const { publicUserId, email, profile, state, role, myAccount } = props;

  const classNames = myAccount
    ? [styles.SingleAccount, styles.MyAccount].join(" ")
    : styles.SingleAccount;
  return (
    <div className={classNames}>
      <span>{publicUserId}</span>
      <span>{email}</span>
      <span>{profile}</span>
      <span>{state}</span>
      <span>{role}</span>
    </div>
  );
};

export default SingleAccount;
