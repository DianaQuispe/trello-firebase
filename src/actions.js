import store from "./store";
import * as firebase from "firebase"; //importamos desde firebase



var config = { // de la pagina de firebase
  apiKey: "AIzaSyDkZNXDdkzzYQ8ZY9O29YKf_z5Sn1iy-68",
  authDomain: "trello-react.firebaseapp.com",
  databaseURL: "https://trello-react.firebaseio.com",
  projectId: "trello-react",
  storageBucket: "trello-react.appspot.com",
  messagingSenderId: "441370051292"
};

firebase.initializeApp(config);
let datitos = store.getState().boards
console.log(datitos)

firebase
  .database()
  .ref("boards")
  .push({
  })
  .then()
  .catch();

  // export const auth = firebase.auth();
  // export const storage = firebase.storage();
  // export const googleAuthProvider = new firebase.auth.GoogleAuthProvider();
 

////////////////////////

// const snapshotToArray = snapshot => {
// let datos = [];
// // console.log("datos ", datos);

// snapshot.forEach(childSnapshot => {
//   let item = childSnapshot.val();
//   let key = childSnapshot.key;
//   item.id= key;
//   console.log("item ", item);
//   datos.push(item);
//     console.log("key ", key);
// })
// store.setState({
//   boards: store.getState().boards
// })
// }


export const readAllComments = () =>{
  // firebase.database()
  // .ref('boards/')
  // .on('value', (res) => {
  //   snapshotToArray(res)

  // });
}

//   let db =firebase.database();
//   let dbRef = db.ref().child('data');

//   dbRef.on('value', (snapshot) => {
//        store.setState({
//       boards : snapshot.val()
//    })
// });


// ref.on(
//   "value",
//   function(snapshot) {
//     console.log(snapshot.val());
//   },
//   function(errorObject) {
//     console.log("The read failed: " + errorObject.code);
//   }
// );






export const selectBoard = index => {
  console.log(index);
  let selectBoard = index;
  store.setState({
    selectItem: selectBoard
  });
};
export const selectCard = index => {
  console.log(index);
  const selectCard = index;
  store.setState({});
};

export const addNewBoard = (text) => {
         console.log(text);
       };
// export const playAction = () => {
//    let selectedSong = store.getState().selectedSong
//    if (selectedSong == -1 )
//       selectedSong = 0

//    store.setState({
//       selectedSong : selectedSong
//    })
// }

// export const nextAction = () => {

//    let selectedSong = store.getState().selectedSong + 1
//    if (selectedSong == store.getState().songs.length )
//       selectedSong = 0

//    store.setState({
//       selectedSong : selectedSong
//    })
// }

// export const stopAction = () => {
//    store.setState({
//       selectedSong : -1
//    })
// }
