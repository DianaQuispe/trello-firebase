import firebase from "firebase";

// Initialize Firebase
var config = {
  apiKey: "AIzaSyDkZNXDdkzzYQ8ZY9O29YKf_z5Sn1iy-68",
  authDomain: "trello-react.firebaseapp.com",
  databaseURL: "https://trello-react.firebaseio.com",
  projectId: "trello-react",
  storageBucket: "trello-react.appspot.com",
  messagingSenderId: "441370051292"
};
firebase.initializeApp(config);

    
export default firebase;

export const database = firebase.database();
export const auth = firebase.auth();
export const storage = firebase.storage();
export const googleAuthProvider = new firebase.auth.GoogleAuthProvider();
