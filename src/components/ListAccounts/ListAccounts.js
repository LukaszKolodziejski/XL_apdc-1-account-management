import React from "react";
import SingleAccount from "./SingleAccount/SingleAccount";
import ListAccountsHeader from "./ListAccountsHeader/ListAccountsHeader";
import styles from "./ListAccounts.module.css";

const ListAccounts = (props) => {
  const { accounts, userId } = props;

  const myAccount = accounts.find((account) => account.userId === userId);

  const allAccount = accounts.map((account) => {
    const isMyAccount = myAccount.userId === account.userId;
    if (myAccount.role === "USER") {
      if (account.role === "USER" && account.kindOfProfile === "Public") {
        return (
          <SingleAccount
            key={account.publicUserId}
            publicUserId={account.publicUserId}
            email={account.email}
            profile={account.kindOfProfile}
            myAccount={isMyAccount}
          />
        );
      }
    } else if (myAccount.role === "GBO") {
      return (
        <SingleAccount
          key={account.publicUserId}
          publicUserId={account.publicUserId}
          email={account.email}
          profile={account.kindOfProfile}
          state={account.state}
          role={account.role}
          myRole={"GBO"}
          myAccount={isMyAccount}
        />
      );
    } else if (myAccount.role === "GA") {
      return (
        <SingleAccount
          key={account.publicUserId}
          publicUserId={account.publicUserId}
          email={account.email}
          profile={account.kindOfProfile}
          state={account.state}
          role={account.role}
          myRole={"GA"}
          myAccount={isMyAccount}
        />
      );
    } else if (myAccount.role === "SU") {
      return (
        <SingleAccount
          key={account.publicUserId}
          publicUserId={account.publicUserId}
          email={account.email}
          profile={account.kindOfProfile}
          state={account.state}
          role={account.role}
          myRole={"SU"}
          myAccount={isMyAccount}
        />
      );
    }
  });
  return (
    <section className={styles.ListAccounts}>
      <ListAccountsHeader role={myAccount.role} />
      {allAccount}
    </section>
  );
};

export default ListAccounts;
