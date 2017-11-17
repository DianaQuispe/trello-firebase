import React, { Component } from "react";
import { connect } from "redux-zero/react";
import "./style/main.css";
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

const Mainheader = ( {}) =>{ 
    return (
        <header className="main-header">
          <nav>
            <ul>
              <li>
                <a href="#">
                  <i className="fa fa-columns" />
                  <span> Boards</span>
                </a>
              </li>
            </ul>
          </nav>
        </header>)
}
const mapToProps = ({ boards, selectItem, selectCard }) => ({
  boards,
  selectItem,
  selectCard
});

export default connect(mapToProps)(Mainheader);//firebase.database().ref('x').push(text)
//si tengo id:
//firebase.database().ref('a/'+ otro.id).set(otrotext)
//export function blabla() {
/*    
    firebase.database().ref('algo').on('value', res => {
        res.forEach(snap => {
            const stage = snap.val
        })
    })
}

*/