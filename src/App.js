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

import "./App.css";

const App = ({ boards,selectItem  }) => {
  return (
    <div>
      <SignIn boards={boards} selectItem={selectItem} />
    </div>
  );
};

const mapToProps = ({ boards, selectItem }) => ({ boards, selectItem });

export default connect(mapToProps)(App);
