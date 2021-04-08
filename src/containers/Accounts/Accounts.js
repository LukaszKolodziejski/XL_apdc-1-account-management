import React, { Component } from "react";
import styles from "./Accounts.module.css";
import ListAccounts from "../../components/ListAccounts/ListAccounts";
import Spinner from "../../components/UI/Spinner/Spinner";
// import NoToken from "./NoToken";
import * as actionCreators from "../../store/actions/index";
import { connect } from "react-redux";

class Accounts extends Component {
  // onLoadingAccounts() is Asynchronous function with 'redux-thunk',
  // created in actionCreators before Reducer
  // where the axios dispatching again fatchData asynchronously

  componentDidMount = () => this.props.onLoadingAccounts(this.props.idToken);

  render() {
    let accounts;
    this.props.loading
      ? (accounts = <Spinner />)
      : (accounts = <ListAccounts accounts={this.props.accounts} />);

    // let accounts;
    // this.props.loading
    //   ? (accounts = <Spinner />)
    //   : this.props.idToken
    //   ? (accounts = this.props.accounts.map((obj) => (
    //       <Order
    //         key={obj.id}
    //         ingredients={obj.ingredients}
    //         totalPrice={obj.totalPrice}
    //       />
    //     )))
    //   : (accounts = <NoToken />);
    return <div className={styles.Accounts}>{accounts}</div>;
  }
}

const mapStateToProps = ({ account, auth }) => {
  const { accounts, loading } = { ...account };
  const { idToken } = { ...auth };
  return { accounts, loading, idToken };
};

const mapDispatchToProps = (dispatch) => ({
  onLoadingAccounts: (token) => dispatch(actionCreators.accounts(token)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Accounts);
