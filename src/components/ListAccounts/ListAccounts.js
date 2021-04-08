import React from "react";
import SingleAccount from "./SingleAccount/SingleAccount";
import ListAccountsHeader from "./ListAccountsHeader/ListAccountsHeader";
import styles from "./ListAccounts.module.css";

const ListAccounts = (props) => {
  const { accounts } = props;

  const allAccount = accounts.map((account) => (
    <SingleAccount
      key={account.publicUserId}
      userId={account.publicUserId}
      email={account.email}
      profile={account.kindOfProfile}
      state={account.state}
      role={account.role}
    />
  ));
  return (
    <section className={styles.ListAccounts}>
      <ListAccountsHeader />
      {allAccount}
    </section>
  );
};

export default ListAccounts;
