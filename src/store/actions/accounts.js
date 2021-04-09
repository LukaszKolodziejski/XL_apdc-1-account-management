import * as actionTypes from "./actionTypes";
import axios from "../../axios-data";

export const accounts = (token) => (dispatch) => {
  if (token) {
    axios.get(`/accounts.json?auth=${token}`).then((res) => {
      const accounts = [];
      for (let key in res.data) {
        accounts.push({ ...res.data[key], id: key });
      }
      dispatch({
        type: actionTypes.ACCOUNTS,
        accounts,
        loadingAccounts: false,
      });
    });
  } else {
    dispatch({
      type: actionTypes.ACCOUNTS,
      accounts: [],
      loadingAccounts: true,
    });
  }
};

export const changeAccountsAttributes = (accounts, userId, state, role) => (
  dispatch
) => {
  const account = accounts.find((account) => account.userId === userId);

  const newAccountData = accounts.map((account) => {
    if (account.userId === userId) {
      const newData = {
        ...account,
        state,
        role,
      };
      return newData;
    }
  });

  dispatch({
    type: actionTypes.CHANGE_ACCOUNTS_ATTRIBUTES,
    accounts,
    loadingAccounts: false,
  });

  // axios.put(`/accounts.json/${account.id}`, newAccountData).then((res) => {
  //   const accounts = [];
  //   for (let key in res.data) {
  //     accounts.push({ ...res.data[key], id: key });
  //   }
  //   dispatch({
  //     type: actionTypes.CHANGE_ACCOUNTS_ATTRIBUTES,
  //     accounts,
  //     loadingAccounts: false,
  //   });
  // });
};
