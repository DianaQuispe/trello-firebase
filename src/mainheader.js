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
import { NavLink, Redirect } from 'react-router-dom';
import SignUp from "./signUp.js";
import { selectBoard, signOut } from "./actions.js";

const Mainheader = ({ user, successLogin}) =>{ 
    return (
        <header className="main-header">
          {
          !successLogin && <Redirect to="/signin" />           
          }
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
          <a href="/" ><span className="logo"></span></a>
          <nav class="right">
            <ul >
              <li >
                <a className="current-user" >
                  <img alt="Gravatar "
                   src="//www.gravatar.com/avatar/6a88cfcf7b76267b129b8dc477c4105e?d=retro&amp;r=g&amp;s=50" 
                   srcSet="//www.gravatar.com/avatar/6a88cfcf7b76267b129b8dc477c4105e?d=retro&amp;r=g&amp;s=100 2x" height="50" width="50" class="react-gravatar react-gravatar"/>
                  <span >{user.email}</span>
               </a>
               </li>
                <li>
                  <button  onClick={signOut}>
                    
                      <i class="fa fa-sign-out" ></i>
                <span> Sign out</span>
              </button>
                </li>
              </ul>
          </nav>
        </header>)
}
const mapToProps = ({ boards, selectItem, selectCard, user, successLogin }) => ({
  boards,
  user,
  selectItem,
  selectCard,
  successLogin
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