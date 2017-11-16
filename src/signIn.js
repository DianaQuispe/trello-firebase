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

import  {readAllComments} from './actions.js'
import SignUp from "./signUp.js";
import Board from "./boards.js";
import { HashRouter, Switch, Route, NavLink } from "react-router-dom";



const Footer = ({ boards, selectItem }) => {
  return (
    <div className="footer">
      <footer>
        <small>
          <a href="https://trello.com/" target="_blank">
            Trello
          </a>{" "}
          tribute for educational purposes crafted with ♥ for{" "}
          <a href="https://diacode.com/">Diacode</a>
          by <a href="https://twitter.com/bigardone">@bigardone</a>
        </small>
      </footer>
    </div>
  );
};
const Header = ({ boards, selectItem }) => {
  return (
    <div>
      <div className="logo" />
      <br />
      <br />
    </div>
  );
};

readAllComments();
const SignIn = ({ boards, selectItem }) => {
  return <div>
      <Grid>
        <Row>
          <Col md={4} mdOffset={3}>
            <Header />
            <form>
              <FormGroup>
                <FormControl className="input" type="email" label="Email address" bsSize="sm" defaultValue="john@phoenix-trello.com" />
                <FormControl className="input" label="Password" type="password" defaultValue="*******" />
              </FormGroup>
              <NavLink to="/board">
                <Button className="button" type="submit">
                  Sign In
                </Button>
              </NavLink>
            </form>
            <NavLink to="/signup">
              <font color="#c4b0cf">Create new account</font>
            </NavLink>
          </Col>
        </Row>
        <Footer />
      </Grid>
    </div>;
};

const mapToProps = ({ boards, selectItem, selectCard }) => ({
  boards,
  selectItem,
  selectCard
});

export default connect(mapToProps)(SignIn);