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
import Board from './Board';
import Home from './Home';
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

const SignUp = ({ boards, selectItem, successLogin, user }) => {
  console.log('usersignup', user.tasks)
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
                );
                this.firstNameRef.value = "";
                this.lastNameRef.value = "";
                this.emailRef.value = "";
                this.passwordRef.value = "";
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
                </InputGroup>
              </FormGroup>
              <Button type="submit" className="button">
                {successLogin && <Redirect to='/home' />}

                Sign Up
              </Button>
          <NavLink to='/signin' className="transparent">
                sign in
            </NavLink>
            </form>
          </Col>
        </Row>
        <Footer />
      </Grid>
    </div>
  );
};

const mapToProps = ({ boards, selectItem, successLogin, user }) => ({ boards, selectItem, successLogin, user });

export default connect(mapToProps)(SignUp);
