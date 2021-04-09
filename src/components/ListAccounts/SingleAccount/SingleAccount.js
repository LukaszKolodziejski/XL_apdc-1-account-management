import React, { useState, useEffect } from "react";
import styles from "./SingleAccount.module.css";

const SingleAccount = (props) => {
  const [state, setState] = useState(props.state);
  const [role, setRole] = useState(props.role);
  const [classState, setClassState] = useState(null);
  const [classRole, setClassRole] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);

  const {
    userId,
    publicUserId,
    email,
    profile,
    myAccount,
    myRole,
    onChangeAttributes,
  } = props;

  useEffect(() => {
    if (isLoaded) onChangeAttributes(userId, state, role);
  }, [state, role, onChangeAttributes]);

  useEffect(() => {
    if (myRole === "GBO" && role === "USER") setClassState(styles.ChangeState);
    if (myRole === "GA" && (role === "USER" || role === "GBO"))
      setClassState(styles.ChangeState);
    if (myRole === "SU" && (role === "USER" || role === "GBO" || role === "GA"))
      setClassState(styles.ChangeState);

    if (myRole === "GA" && (role === "USER" || role === "GBO"))
      setClassRole(styles.ChangeRole);
    if (myRole === "SU" && (role === "USER" || role === "GBO" || role === "GA"))
      setClassRole(styles.ChangeRole);
    setIsLoaded(true);
  }, []);

  const stateHandler = () => {
    if (myRole === "GBO" && role === "USER")
      setState((prev) => (prev === "ENABLED" ? "DISABLED" : "ENABLED"));
    if (myRole === "GA" && (role === "USER" || role === "GBO"))
      setState((prev) => (prev === "ENABLED" ? "DISABLED" : "ENABLED"));
    if (myRole === "SU" && (role === "USER" || role === "GBO" || role === "GA"))
      setState((prev) => (prev === "ENABLED" ? "DISABLED" : "ENABLED"));
  };

  const roleHandler = () => {
    if (myRole === "GA" && (role === "USER" || role === "GBO"))
      setRole((prev) => (prev === "USER" ? "GBO" : "USER"));
    if (myRole === "SU" && (role === "USER" || role === "GBO" || role === "GA"))
      setRole((prev) =>
        prev === "USER"
          ? "GBO"
          : prev === "GBO"
          ? "GA"
          : prev === "GA"
          ? "USER"
          : null
      );
  };

  const classNames = myAccount
    ? [styles.SingleAccount, styles.MyAccount].join(" ")
    : styles.SingleAccount;
  return (
    <div className={classNames}>
      <span>{publicUserId}</span>
      <span>{email}</span>
      <span>{profile}</span>
      <span className={classState} onClick={stateHandler}>
        {state}
      </span>
      <span className={classRole} onClick={roleHandler}>
        {role}
      </span>
    </div>
  );
};

export default SingleAccount;
