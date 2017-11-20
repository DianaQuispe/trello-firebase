import React, { Component } from "react";
import { connect } from "redux-zero/react";
import SignIn from "./signIn.js";
import {
  Grid,
  Row,
  Col,
  formGroup,
  FormControl,
  Button
} from "react-bootstrap";
import "./style/main.css";

const App = ({ boards,selectItem, user  }) => {
  console.log('userapp', user)
  return (
    <div>
      <SignIn boards={boards} selectItem={selectItem} user= {user} />
    </div>
  );
};

const mapToProps = ({ boards, selectItem, user }) => ({ boards, selectItem, user });

export default connect(mapToProps)(App);
