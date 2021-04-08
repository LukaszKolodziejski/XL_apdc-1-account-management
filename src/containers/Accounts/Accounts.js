import React, { Component } from "react";
import styles from "./Accounts.module.css";
import ListAccounts from "../../components/ListAccounts/ListAccounts";
import Spinner from "../../components/UI/Spinner/Spinner";
import NoToken from "./NoToken";
import * as actionCreators from "../../store/actions/index";
import { connect } from "react-redux";

class Accounts extends Component {
  // onLoadingAccounts() is Asynchronous function with 'redux-thunk',
  // created in actionCreators before Reducer
  // where the axios dispatching again fatchData asynchronously

  componentDidMount = () => this.props.onLoadingAccounts(this.props.idToken);

  render() {
    let allAccounts;
    const { accounts, userId, loading, idToken, loadingAccounts } = this.props;

    loadingAccounts
      ? (allAccounts = <Spinner />)
      : idToken
      ? (allAccounts = allAccounts = (
          <ListAccounts accounts={accounts} userId={userId} />
        ))
      : (allAccounts = <NoToken />);

    return <div className={styles.Accounts}>{allAccounts}</div>;
  }
}

const mapStateToProps = ({ account, auth }) => {
  const { accounts, loadingAccounts } = { ...account };
  const { idToken, userId, loading } = { ...auth };
  return { accounts, loading, idToken, userId, loadingAccounts };
};

const mapDispatchToProps = (dispatch) => ({
  onLoadingAccounts: (token) => dispatch(actionCreators.accounts(token)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Accounts);
