import firebase from 'firebase'

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyCInamfXDwLISvpgcpIpncY05t0p8hDrL0",
  authDomain: "login-fed2d.firebaseapp.com",
  databaseURL: "https://login-fed2d.firebaseio.com",
  projectId: "login-fed2d",
  storageBucket: "login-fed2d.appspot.com",
  messagingSenderId: "457169666296",
  appId: "1:457169666296:web:87240547ccf0f9c5a7bb0d",
};
// Initialize Firebase
const fire = firebase.initializeApp(firebaseConfig);

export default fire;