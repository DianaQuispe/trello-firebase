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
import { HashRouter, Switch, Route, NavLink } from "react-router-dom";
import { SignIn } from "./signIn.js";
import Board from "./boards.js";

const Footer = ({ boards }) => {
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
const Header = ({ boards }) => {
  return (
    <div>
      <div className="logo" />
      <br />
      <br />
    </div>
  );
};

const SignUp = ({ boards, selectItem }) => {
  return (
    <div>
      <Grid>
        <Row>
          <Col md={4} mdOffset={3}>
            <Header />
            <form>
              <FormGroup>
                <FormControl
                  className="input"
                  type="text"
                  label="text"
                  placeholder="First name"
                  bsSize="sm"
                />
                <FormControl
                  className="input"
                  type="text"
                  label="text"
                  placeholder="Last name"
                  bsSize="sm"
                />
                <FormControl
                  className="input"
                  type="email"
                  label="Email address"
                  placeholder="Email"
                  bsSize="sm"
                />
                <FormControl
                  className="input"
                  label="Password"
                  type="password"
                  placeholder="password"

                />
                <FormControl
                  className="input"
                  label="Password"
                  type="Password"
                  placeholder="Confirm password"

                />
              </FormGroup>
              <NavLink to="/board">
              <Button className="button"  >Sign Up</Button>
            </NavLink>
            <NavLink to="/signin">
              <p>sign in</p>
            </NavLink>
            </form>
          </Col>
        </Row>
        <Footer />
      </Grid>
    </div>
  );
};

const mapToProps = ({ boards, selectItem }) => ({ boards, selectItem });

export default connect(mapToProps)(SignUp);
