import React from "react";
import SingleAccount from "./SingleAccount/SingleAccount";
import ListAccountsHeader from "./ListAccountsHeader/ListAccountsHeader";
import styles from "./ListAccounts.module.css";

const ListAccounts = (props) => {
  const { accounts, userId } = props;

  console.log(userId);

  const allAccount = accounts.map((account) => (
    <SingleAccount
      key={account.publicUserId}
      publicUserId={account.publicUserId}
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
