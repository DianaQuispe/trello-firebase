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

const Mainheader = ( {user}) =>{ 
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
          <a href="/" ><span class="logo"></span></a>
          <nav class="right">
            <ul >
              <li >
                <a class="current-user" >
                  <img alt="Gravatar "
                   src="//www.gravatar.com/avatar/6a88cfcf7b76267b129b8dc477c4105e?d=retro&amp;r=g&amp;s=50" 
                   srcset="//www.gravatar.com/avatar/6a88cfcf7b76267b129b8dc477c4105e?d=retro&amp;r=g&amp;s=100 2x" height="50" width="50" class="react-gravatar react-gravatar"/>
                  <span >{user.email}</span>
               </a>
               </li>
                <li>
                  <a href="#">
                      <i class="fa fa-sign-out" ></i>
                <span> Sign out</span>
                </a>
                </li>
              </ul>
          </nav>
        </header>)
}
const mapToProps = ({ boards, selectItem, selectCard, user }) => ({
  boards,
  user,
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