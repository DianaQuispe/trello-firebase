// import React, { Component } from "react";
// import { connect } from "redux-zero/react";
// import { readBoard, addStage, addTask  } from "./actions.js";
// import Mainheader from "./mainheader.js";
// import "./style/main.css";
// import {
//   Grid,
//   Row,
//   Col,
//   FormGroup,
//   FormControl,
//   Button
// } from "react-bootstrap";
// import { HashRouter, Switch, Route, NavLink } from "react-router-dom";
// import SignUp from "./signUp.js";
// import MyBoards from './myboards.js';
// import Newboard from "./newboard.js";
// import Stage from './Stage';



// const Boards = ({item, index, selectBoard}) => {
//   return (
//       <div>
//         <Col md={3}>
//             <div onClick={selectBoard} className="boards">             
//             <NavLink to="/myboards">
//             {item.name}
//             </NavLink>
//             </div> 

//         </Col>
//      </div>
//   );
// };

// const OtherBoards = ({}) => {
//   return(
//      <Row>
//         <h3><i className="fa fa-users"></i><span> Other boards</span></h3>
//         <Col md={3} >
//           <div className='boards'>Primero</div>
//           <div className='boards'>Segundo</div>

//         </Col>
//       </Row>
//   )
// }
 

// const Board = ({ boards, user, stages, tasks }) => {

//   console.log(stages, tasks)
//   const list = stages.map(stage => {
//     return <Stage key={stage} title={stage}
//       tasks={tasks.filter(e => e.stage === stage)}
//     />
//   });


//  const NewBoard = ({}) => {
//    return <Col md={3}>
//        <form className="boards" onSubmit={e => {
//            e.preventDefault();
//            console.log("this.newCardref.value", this.newCardref.value);
//          }}>
//          <h3>New board</h3>
//          <FormControl ref={e => (this.newCardref = e)} className="input add" label="Password" type="text" placeholder="Add a new card..." />
//           <NavLink to="/newboard"> 
//            <button type="submit">Create board</button>
//          </NavLink> 
//          <span>
//            or <a href="#">cancel</a>
//          </span>
//        </form>
//      </Col>;
//  };
//   return (
//   <Grid >
//     <Mainheader/>
//       <div>
//       <h3>
//         <i className="fa fa-users" />
//         <span> My boards</span>
//       </h3>
//       <div className="Board-container">

//         <div className="Board-column">
//           {list}
//         </div>
//         <div className="Board-column">
//           <form onSubmit={(e) => {
//             e.preventDefault();
//             addStage(this.stageInputRef.value);
//           }}>
//             <input type="text" ref={e => this.stageInputRef = e} />
//             <button type="submit">
//               save list
//                </button>
//           </form>
//         </div>
//       </div>
//         {/* <h3>
//           <i className="fa fa-users" />
//           <span> My boards</span>
//         </h3>
//         {boards.map((item, index) => {
//         })}
//         <Col md={3}>
//           <div onClick={Newboard} className="boards newBoard text-center">
//             Add new board...
//           </div>
//         </Col>
//         <NewBoard/> */}
//       </div>
//       {/* <OtherBoards /> */}
//     </Grid>
//     );
// };


// const mapToProps = ({ boards, selectItem, user, stages, tasks }) => ({ boards, selectItem, user, stages, tasks });

// export default connect(mapToProps)(Board);






