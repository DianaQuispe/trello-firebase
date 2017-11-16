import React, { Component } from "react";
import { connect } from "redux-zero/react";
import "./mainheader.css";
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
    return <div className=".main-header">
    m primis in faucibus. Pellentesque sed
        justo eu tortor maximus semper. Maecenas sollicitudin aliquet augue
        ac maximus. Fusce sit amet eros ut nisi cursus sodales ut vitae
        velit. Sed sit amet risus et elit fermentum tempus ac eget nisl.
      </div>;
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