import React, { Component } from 'react';
import { connect } from 'redux-zero/react'

import { NavLink, Redirect } from 'react-router-dom';
import { signIn, signOut, signUp, addNewBoard } from './actions'
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
import Board from './Board';


const Home = ({ successLogin, user, boards, stages, tasks }) => {

    let list = null;
    if (boards)
        list = boards.map(board => {
            return <Board key={board.id}
                title={board.title}
                boardId={board.id}
                stages={stages == null ? null :
                    stages.filter(e => e.board_id == board.id)}
                tasks={tasks} />
        })
    return (



        <Grid >
            <Mainheader />
            <div>
                <h3>
                    <i className="fa fa-users" />
                    <span> My boards</span>
                </h3>
                <div>
                    <form className='boards' onSubmit={e => {
                        e.preventDefault();
                        addNewBoard(this.boardInputRef.value, user.id)
                        this.boardInputRef.value = '';
                    }}>
                        <input className="input add"  placeholder="Board Name" ref={e => this.boardInputRef = e} />
                        <button type="submit">
                            Push a new Board
                         </button>
                        <span>
                            or <a href="#">cancel</a>
                        </span>
                    </form>
                    <ul>
                        {list}
                    </ul>

                    {
                        !successLogin && <Redirect to="/signin" />
                    }
                </div>
            </div>
        </Grid>




    )
}

const mapToProps = ({ successLogin, user, boards, stages, tasks }) => ({ successLogin, user, boards, stages, tasks })
export default connect(mapToProps)(Home) 