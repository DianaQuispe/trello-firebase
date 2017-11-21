import React from "react";
import Task from "./Task";
import { addTask } from "./actions";
import {
  Grid,
  Row,
  Col,
  FormGroup,
  FormControl,
  Button
} from "react-bootstrap";

class Stage extends React.Component {
  render() {
    let list = null;
    if (this.props.tasks)
      list = this.props.tasks.map(task => {
        return <Task key={task.id} title={task.title} />;
      });
    return <div className="boards">
        <h3> {this.props.title}</h3>
        {list}
        <form onSubmit={e => {
            e.preventDefault();
            console.log("this.taskInputRef.value", this.taskInputReference.value);
            addTask(this.props.stageId, this.taskInputReference.value);
            this.taskInputReference.value = "";
          }}>
          <input type="text" ref={e => (this.taskInputReference = e)} />
          <Button type="submit" placeholder='Add a new card...'>Add a new card...</Button>
        </form>
      </div>;
  }
}
export default Stage;
