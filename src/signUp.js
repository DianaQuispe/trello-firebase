import React, { Component } from "react";
import { connect } from "redux-zero/react";
import "./style/main.css";
import {
  Grid,
  Row,
  Col,
  FormGroup,
  Button,
  InputGroup,
  FormControl
} from "react-bootstrap";
import { NavLink, Redirect } from 'react-router-dom';
import { SignIn } from "./signIn.js";
import Board from "./boards.js";
import { SignUpAdd } from "./actions.js";

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
const Header = ({ boards, selectItem }) => {
  return (
    <header>
      <div className="logo" />
    </header>
  );
};

const SignUp = ({ boards, selectItem, successLogin }) => {
  return (
    <div>
      <Grid>
        <Row>
          <Col className="marginS" md={5} mdOffset={4}>
            <Header />
            <form
              onSubmit={e => {
                e.preventDefault();
                // console.log( 'name:', this.firstNameRef);
                SignUpAdd(
                  this.firstNameRef.value,
                  this.lastNameRef.value,
                  this.emailRef.value,
                  this.passwordRef.value,
                  this.confirmPasswordRef.value
                );
                this.firstNameRef.value = "";
                this.lastNameRef.value = "";
                this.emailRef.value = "";
                this.passwordRef.value = "";
                this.confirmPasswordRef.value = "";
              }}
            >
              <FormGroup>
                <InputGroup>
                  <FormControl
                    inputRef={e => (this.firstNameRef = e)}
                    className="input"
                    type="text"
                    placeholder="First name"
                  />
                  <FormControl
                    inputRef={e => (this.lastNameRef = e)}
                    className="input"
                    type="text"
                    placeholder="Last name"
                  />
                  <FormControl
                    inputRef={e => (this.emailRef = e)}
                    className="input"
                    type="email"
                    placeholder="Email"
                  />
                  <FormControl
                    inputRef={e => (this.passwordRef = e)}
                    className="input"
                    type="password"
                    placeholder="password"
                  />
                  <FormControl
                    inputRef={e => (this.confirmPasswordRef = e)}
                    className="input"
                    type="Password"
                    placeholder="Confirm password"
                  />
                </InputGroup>
              </FormGroup>

              {/* <NavLink to="/board"> */}
              <Button type="submit" className="button">
                Sign Up
              </Button>
              {/* </NavLink> */}
              {/* <NavLink to="/signin">
                <p>sign in</p>
              </NavLink> */}
            </form>
          </Col>
        </Row>
        <Footer />
      </Grid>
    </div>
  );
};

const mapToProps = ({ boards, selectItem, successLogin }) => ({ boards, selectItem, successLogin });

export default connect(mapToProps)(SignUp);
