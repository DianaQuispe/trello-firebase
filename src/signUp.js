import React, { Component } from "react";
import { connect } from "redux-zero/react";
import "./App.css";
import {
  Grid,
  Row,
  Col,
  FormGroup,
  input,
  Button
} from "react-bootstrap";
import { HashRouter, Switch, Route, NavLink } from "react-router-dom";
import { SignIn } from "./signIn.js";
import Board from "./boards.js";
import addBoards from './actions.js'

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
            <form
              onSubmit={e => {
                e.preventDefault();
                addBoards(
                  this.firstNameRef,
                  this.lastNameRef,
                  this.emailRef,
                  this.passwordRef,
                  this.confirmPasswordRef
                );
              }}
            >
                <input
                  ref={e => (this.firstNameRef = e)}
                  className="input"
                  type="text"
                  label="text"
                  placeholder="First name"
                />
                <input
                  ref={e => (this.lastNameRef = e)}
                  className="input"
                  type="text"
                  label="text"
                  placeholder="Last name"
                />
                <input
                  ref={e => (this.emailRef = e)}
                  className="input"
                  type="email"
                  label="Email address"
                  placeholder="Email"
                />
                <input
                  ref={e => (this.passwordRef = e)}
                  className="input"
                  label="Password"
                  type="password"
                  placeholder="password"
                />
                <input
                  ref={e => (this.confirmPasswordRef = e)}
                  className="input"
                  label="Password"
                  type="Password"
                  placeholder="Confirm password"
                />
              <NavLink to="/board">
                <button type='submit' className="button">Sign Up</button>
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
