import React, { Component } from "react";
import { connect } from "redux-zero/react";
import "./style/main.css";
import {
  Grid,
  Row,
  Col,
  FormGroup,
  FormControl,
  Button,
  InputGroup
} from "react-bootstrap";

import { readAllComments, writeUserData, signInUser } from "./actions.js";
import SignUp from "./signUp.js";
import Board from "./boards.js";
import { HashRouter, Switch, Route, NavLink } from "react-router-dom";
import store from "./store";

const Footer = ({ boards, selectItem }) => {
  return (
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
  );
};
const Header = ({ boards, selectItem }) => {
  return (
    <header>
      <div className="logo" />
    </header>
  );
};
writeUserData();
readAllComments();

const SignIn = ({ boards, selectItem }) => {
  return (
    <div className='signIn'>
      <Grid >
        <Row>
          <Col
            className="marginS"
            md={5}
            mdOffset={4}
            xs={12}
            sm={12}
            smOffset={4}
          >
            <Header />
            <form
              onSubmit={e => {
                e.preventDefault();
                signInUser(this.signInEmailRef.value, this.signInPassRef.value);
                console.log(this.signInEmailRef.value);
                this.signInEmailRef.value = "";
                this.signInPassRef.value = "";
              }}
            >
              <FormGroup>
                <InputGroup>
                  <FormControl
                    inputRef={ref => {
                      this.signInPassRef = ref;
                    }}
                    className="input"
                    type="email"
                    label="Email address"
                  />
                </InputGroup>
              </FormGroup>
              <FormGroup>
                <InputGroup>
                  <FormControl
                    inputRef={ref => {
                      this.signInEmailRef = ref;
                    }}
                    className="input"
                    label="Password"
                    type="password"
                    defaultValue="*******"
                  />
                </InputGroup>
              </FormGroup>
              {/* <NavLink to="/board"> */}
              <Button className="button" type="submit">
                Sign In
              </Button>
              {/* </NavLink> */}
            </form>
            <NavLink to="/signup">
              <a href="/signup" className="transparent">
                Create new account
              </a>
            </NavLink>
          </Col>
        </Row>
      </Grid>
      <Footer />
    </div>
  );
};

const mapToProps = ({ boards, selectItem, selectCard }) => ({
  boards,
  selectItem,
  selectCard
});

export default connect(mapToProps)(SignIn);
