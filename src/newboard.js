import React, { Component } from "react";
import { connect } from "redux-zero/react";
import "./App.css";
import {
  Grid,
  Row,
  Col,
  FormGroup,
  FormControl,
  Button
} from "react-bootstrap";
// import {selectMenu} from './actions.js'
import { HashRouter, Switch, Route, NavLink } from "react-router-dom";
import SignUp from "./signUp.js";
import { selectBoard } from "./actions.js";

const Newboard = ({ boards, selectItem }) => {
    return(
        <div>
            posnew
        </div>
    )
};
const mapToProps = ({ boards, selectItem, selectCard }) => ({
  boards,
  selectItem,
  selectCard
});

export default connect(mapToProps)(Newboard);
 