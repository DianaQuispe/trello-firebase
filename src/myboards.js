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
import Mainheader from './mainheader.js'
const Myboards = ({ item, index }) => {
  return <div>
      <Col>
        <div>
          <div className="card">
            {item.map((a, b) => {
              return <div key={b}>{a}</div>;
            })}
          </div>
          <FormControl className='newCard' label="Password" type="text" placeholder='Add a new card...' />
        </div>
      </Col>
    </div>;
};
const MyBoards = ({ boards,selectItem, selectCard }) => {
  console.log();

  return <Grid className="board flex">
    <Mainheader/>
      <Row>
        <h3> {boards[selectItem].name}</h3>
        {boards[selectItem].cards.map((item, index) => {
          return <div key={index}>
              <div className="list">
                <h3>{item.name}</h3>

                <Myboards key={index} item={item.list} index={index} />
              </div>
            </div>;
        })}
      </Row>
    </Grid>;
};

const mapToProps = ({ boards, selectItem, selectCard }) => ({ boards,selectItem, selectCard });

export default connect(mapToProps)(MyBoards);
