import * as actionType from "../actions/actionTypes";

const initialState = {
  accounts: [],
  loadingAccounts: true,
};

const accounts = (state, action) => ({
  ...state,
  accounts: action.accounts,
  loadingAccounts: action.loadingAccounts,
});

const reducer = (state = initialState, action) =>
  action.type === actionType.ACCOUNTS ? accounts(state, action) : state;

export default reducer;
