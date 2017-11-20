import store from "./store";
import firebase from "./firebase";
import { auth, database } from './firebase';


export function readBoard() {
  firebase.database().ref('stages').on('value', res => {
    let stages = []
    res.forEach(snap => {
      const stage = snap.val();
      stages.push(stage);
      // database.ref('users/').push(stages);   

    })
    store.setState({
      stages: stages
    })

  });

  firebase.database().ref('tasks').on('value', res => {
    let tasks = [];
    res.forEach(snap => {
      const task = snap.val();
      tasks.push(task)
    })
    store.setState({
      tasks: tasks
    })
  });

}



export function addStage(text) {

  let stages = [...store.getState().stages];
  stages.push(text)
  firebase.database().ref('stages').push(text);

  auth.onAuthStateChanged(user => {
    if (user) {
      console.log('stageuser', user);
      console.log('stageuserid',user.uid)
      // let usersRef = database.ref('/users');
      // let userRef = usersRef.child(user.uid);
      // store.setState({
      //   successLogin: true,
      // })
    }
  });






}

export function addTask(stage, text) {
  console.log('addTask:', stage + ' - ' + text);

  let tasks = [...store.getState().tasks];

  let newTask = {
    id: store.getState().tasks.length,
    title: text,
    stage: stage
  }

  firebase.database().ref('tasks/' + newTask.id).set(newTask);
}


export function SignUpAdd(
  firstName,
  lastName,
  email,
  password,
  confirmPassword,
 
) {
  console.log("datos", firstName + "-" + lastName + "-" + email + "-" + password + "-" +  confirmPassword );

  auth.createUserWithEmailAndPassword(email, password).then(user => {
    let stages = [...store.getState().stages];
    let tasks = [...store.getState().tasks];
    let newuser = {
      firstName,
      lastName,
      email,
      password,
      confirmPassword,    
    }
    database.ref('users/' + user.uid).set(newuser);

    // database.ref ('users/' + user.uid + '/options').update ( 'option1, option2, option3...');   

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
    console.log(user.uid)
    let usersRef = database.ref('/users');
    let userRef = usersRef.child(user.uid);
    store.setState({
      successLogin: true,      
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
