import * as actionTypes from "./actionTypes";
import axios from "../../axios-data";

export const accounts = (token) => (dispatch) => {
  // axios.get(`/orders.json?auth=${token}`)
  axios.get(`/accounts.json`).then((res) => {
    const accounts = [];
    for (let key in res.data) {
      accounts.push({ ...res.data[key], id: key });
    }
    dispatch({
      type: actionTypes.ACCOUNTS,
      accounts,
      loading: false,
    });
  });
};
