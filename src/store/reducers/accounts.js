import * as actionType from "../actions/actionTypes";

const initialState = {
  accounts: [],
  loading: true,
};

const accounts = (state, action) => ({
  ...state,
  accounts: action.accounts,
  loading: action.loading,
});

const reducer = (state = initialState, action) =>
  action.type === actionType.ACCOUNTS ? accounts(state, action) : state;

export default reducer;
