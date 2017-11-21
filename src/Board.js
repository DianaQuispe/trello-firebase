import React from "react";
import { addStage } from "./actions";
import Stage from "./Stage";
import "./style/main.css";
import { NavLink, Redirect } from "react-router-dom";
import { connect } from "redux-zero/react";
import Mainheader from "./mainheader.js";
import {
  Grid,
  Row,
  Col,
  FormGroup,
  FormControl,
  Button
} from "react-bootstrap";
import { signIn, signOut, signUp, addNewBoard } from "./actions";



class Board extends React.Component {
  render() {
    const { title, boardId, stages, tasks } = this.props;
    let list = null;
    if (stages)
      list = stages.map(stage => {
        return (
          <Stage
            key={stage.id}
            title={stage.title}
            stageId={stage.id}
            tasks={
              tasks == null
                ? null
                : tasks.filter(task => task.stageId === stage.id)
            }
          />
        );
      });
    return <div>
        <br />
        <h3> {title} </h3>
        <form className="boards" onSubmit={e => {
            e.preventDefault();
            addStage(this.stageInputRef.value, boardId);
            this.stageInputRef.value = "";
          }}>
          <input placeholder="Add a new list..." type="text" ref={e => (this.stageInputRef = e)} />

          <Button className="add" type="submit">
            Save list
          </Button>
          <span>
            or <a href="#">cancel</a>
          </span>
        </form>
        <div className="Board-column">{list}</div>
        <div className="Board-column" />
      </div>;
  }
}

const Myboard = ({ successLogin, user, boards, stages, tasks }) => {
  let list = null;
  if (boards)
    list = boards.map(board => {
      return (
        <Board
          key={board.id}
          title={board.title}
          boardId={board.id}
          stages={
            stages == null ? null : stages.filter(e => e.board_id == board.id)
          }
          tasks={tasks}
        />
      );
    });
  return (<Grid>
      <Mainheader />
      <div >
        <ul>{list}</ul>
      </div>
    </Grid>);
};

const mapToProps = ({ successLogin, user, boards, stages, tasks }) => ({ successLogin, user, boards, stages, tasks })
export default connect(mapToProps)(Myboard) 

/*
  {
    !successLogin && <Redirect to="/signin" />;
  }
 */ 