import React, { Component } from "react";
import axios from "../../axios-data";
import styles from "./Registration.module.css";
import Button from "../..//components/UI/Button/Button";
import Input from "../..//components/UI/Input/Input";

const dynamicState = (
  placeholder,
  elementType = "input",
  type = "text",
  value = ""
) => {
  return {
    elementType,
    elementConfig: { type, placeholder },
    value,
    validation: {
      required: true,
    },
    valid: false,
  };
};

class Registration extends Component {
  state = {
    formData: {
      userId: dynamicState("User ID"),
      email: dynamicState("E-mail"),
      password: dynamicState("Password"),
      repeatPasswor: dynamicState("Repeat password"),
    },
    formIsValid: false,
  };

  registrationHandler = (e) => {
    e.preventDefault();
    const { userId, email, password } = this.state.formData;

    const data = {
      userId: userId.value,
      email: email.value,
      password: password.value,
      role: "USER",
      state: "ENABLED",
    };

    console.log(data);

    axios.post("/user.json", data).then((res) => {
      this.props.history.push("/user");
    });

    // --- Advanced version with Redux Thunk & Token from Firebase --- \\
    // this.props.onOrderBurger(order, this.props.idToken);
  };

  checkValidity = (value, rules) =>
    rules.required ? value.trim() !== "" : false;

  inputHandler = (e, id) => {
    const formData = { ...this.state.formData };
    if (e.target.elementType !== "select") {
      formData[id].value = e.target.value;
      formData[id].valid = this.checkValidity(
        formData[id].value,
        formData[id].validation
      );
    }
    let formIsValid = true;
    for (const key in formData) {
      formIsValid = formData[key].valid && formIsValid;
    }
    this.setState({ formData, formIsValid });
  };

  render() {
    const allInputs = [];
    for (const key in this.state.formData) {
      const {
        elementType,
        elementConfig,
        value,
        valid,
        validation,
      } = this.state.formData[key];
      allInputs.push(
        <Input
          key={key}
          elementType={elementType}
          elementConfig={elementConfig}
          value={value}
          changed={(e) => this.inputHandler(e, key)}
          valid={!valid}
          shouldValidate={validation}
        />
      );
    }
    let form = (
      <form onSubmit={this.registrationHandler}>
        {allInputs}
        <Button btnType="Success" disabled={!this.state.formIsValid}>
          Sign Up
        </Button>
      </form>
    );

    return (
      <div className={styles.Registration}>
        <h4>Enter your data to registration</h4>
        {form}
      </div>
    );
  }
}

export default Registration;
