import store from "./store";
import firebase from "./firebase";
import { auth, database } from './firebase';
// import firebase from "firebase";


//   let datosUsers = store.getState().user;
// export function writeUserData() {

//   firebase
//     .database()
//     .ref("user")
//     .set({
//       datosUsers
//     });
// }


export function SignUpAdd(
  firstName,
  lastName,
  email,
  password,
  confirmPassword
) {
  console.log("datos", firstName + "-" + lastName + "-" + email + "-" + password + "-" +  confirmPassword );

  auth.createUserWithEmailAndPassword(email, password).then(user => {
    let newuser = {
      firstName,
      lastName,
      email,
      password,
      confirmPassword,
      
      stages: ['1', 2],
      tasks: [1, '2']   
    }
    database.ref('users/' + user.uid).set(newuser);

    // database.ref ('users/' + user.uid + '/options').update ( 'option1, option2, option3...');   
    //  database.ref ('users/').push (newuser);   

    database.ref('users/' + user.uid).once('value').then(res => {
      const fullUserInfo = res.val();

      console.log('full info ', fullUserInfo);  // en fullUserInfo se muestra toda la informacion del usuario
      store.setState({
        user: {
          id: user.uid,
          firstName: fullUserInfo.firstName,
          lastName: fullUserInfo.lastName,
          email: fullUserInfo.email,
          password: fullUserInfo.password,
          confirmPassword: fullUserInfo.confirmPassword,
          stages: fullUserInfo.stages,
          tasks: fullUserInfo.tasks,
        }
      })
    })

  })


}


export function signInUser(email, password) {
    console.log('email', email +'-'+ 'password', password)
    auth.signInWithEmailAndPassword(email, password).then(userObj => {

    database.ref('users/' + userObj.uid).once('value').then(res => {
      const fullUserInfo = res.val();

      console.log('full info ', fullUserInfo);
      store.setState({
        user: {
          id: userObj.uid,
          firstName: fullUserInfo.firstName,
          lastName: fullUserInfo.lastName,
          email: fullUserInfo.email,
          password: fullUserInfo.password,
          confirmPassword: fullUserInfo.confirmPassword,
        }
      })
    })
  }) 
}



auth.onAuthStateChanged(user => {
  if (user) {
    console.log('user', user);
    let usersRef = database.ref('/users');
    let userRef = usersRef.child(user.uid);
    store.setState({
      successLogin: true
    })
  }
});




export function signOut() {
  auth.signOut();
  store.setState({
    successLogin: false,
    user: {
      id: '',
      email: ''
    }
  })
}





// let datosBoards = store.getState().boards;

// firebase
//   .database()
//   .ref("datosUsers/")
//   .push({
//     firstName: "asd",
//     lastNamev: "Quasdispe",
//     email: "danaaliasdenmas@gmail.com",
//     password: "as",
//     confirmPassword: "asd"
//   })
//   .then()
//   .catch();





// firebase
//   .database()
//   .ref("users")
//   .push({ datosUsers })
//   .then()
//   .catch();

// export const storage = firebase.storage();
// export const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

// ////////////////////////

const snapshotToArray = snapshot => {
  let datos = [];
  console.log("datos ", datos);

  snapshot.forEach(childSnapshot => {
    let item = childSnapshot.val();
    let key = childSnapshot.key;
    item.id = key;
    console.log("item ", item);
    datos.push(item);
    console.log("key ", key);
  });
  store.setState({
    boards: store.getState().boards
  });
};

export const readAllComments = () => {
  // firebase
  //   .database()
  //   .ref("boards/")
  //   .on("value", res => {
  //     snapshotToArray(res);
  //   });
};

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

export const addNewBoard = text => {
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
