import React, { Component } from "react";
import { connect } from "redux-zero/react";

import { NavLink, Redirect } from "react-router-dom";
import { signIn, signOut, signUp, addNewBoard } from "./actions";
import {
  Grid,
  Row,
  Col,
  FormGroup,
  FormControl,
  Button
} from "react-bootstrap";
import "./style/main.css";
import Mainheader from "./mainheader.js";
import Myboard from "./Board";

const Home = ({ successLogin, user, boards, stages, tasks }) => {
    // console.log(successLogin)
  return <Grid>
      <Mainheader />
      <div>
        <h3>
          <i className="fa fa-user" />
          <span> My boards</span>
        </h3>
        <div>
          <form className="boards" onSubmit={e => {
              e.preventDefault();
              addNewBoard(this.boardInputRef.value, user.id);
              this.boardInputRef.value = "";
            }}>
            <h3>New Board</h3>
            <input className="add" placeholder="Board Name" ref={e => (this.boardInputRef = e)} />
            <br /> <br />
            <Button type="submit">Push a new Board</Button>
            <span>
              or <a href="#">cancel</a>
            </span>
          </form>
        </div>
      </div>
    </Grid>;
};

const mapToProps = ({ successLogin, user, boards, stages, tasks }) => ({
  successLogin,
  user,
  boards,
  stages,
  tasks
});
export default connect(mapToProps)(Home);
