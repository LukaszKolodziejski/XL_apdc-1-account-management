import React from "react";
import SingleAccount from "./SingleAccount/SingleAccount";
import ListAccountsHeader from "./ListAccountsHeader/ListAccountsHeader";
import styles from "./ListAccounts.module.css";

const ListAccounts = (props) => {
  const { accounts, userId } = props;

  console.log(userId);
  console.log(accounts);

  const myAccount = accounts.find((account) => account.userId === userId);
  //   console.log(myAccount.publicUserId);

  const allAccount = accounts.map((account) => {
    if (myAccount.role === "USER") {
      if (account.role === "USER" && account.kindOfProfile === "Public") {
        return (
          <SingleAccount
            key={account.publicUserId}
            publicUserId={account.publicUserId}
            email={account.email}
            profile={account.kindOfProfile}
            state={account.state}
            role={account.role}
            myAccount={myAccount.userId === account.userId}
          />
        );
      }
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
