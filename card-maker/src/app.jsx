import './app.css';
import Login from './components/login/login';
import CardAndProfile from './components/card_and_profile/card_and_profile';
import firebase from 'firebase/app'
import 'firebase/storage'
import 'firebase/analytics'
import 'firebase/auth'


const firebaseConfig = {
  apiKey: "AIzaSyCW6b1TgN9XGmRofspcUbl5Lo82kkNXM4k",
  authDomain: "card-maker-73d7b.firebaseapp.com",
  projectId: "card-maker-73d7b",
  storageBucket: "card-maker-73d7b.appspot.com",
  messagingSenderId: "1090730347699",
  appId: "1:1090730347699:web:708ab54d542f19919034c6",
  measurementId: "G-SSKVPJLYJC"
};
// Initialize Firebase
if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
} else {
  firebase.app();
}
firebase.analytics();

function googleLogin(){
const provider = new firebase.auth.GoogleAuthProvider();
firebase.auth().languageCode = 'kor';

firebase.auth()
  .signInWithPopup(provider)
  .then((result) => {
    /** @type {firebase.auth.OAuthCredential} */

    const credential = result.credential;
    console.log(credential);
    // console.log(result.user.bc.emailVerified);
    // This gives you a Google Access Token. You can use it to access the Google API.
    const token = credential.accessToken;
    // The signed-in user info.
    const user = result.user.bc.emailVerified;
    console.log(user);
    return user;
  })
  .catch((error) => {
    // Handle Errors here.
    const errorCode = error.code;
    console.log(errorCode);
    const errorMessage = error.message;
    console.log(errorMessage);
    // The email of the user's account used.
    const email = error.email;
    // The firebase.auth.AuthCredential type that was used.
    const credential = error.credential;
    // ...
  });

}


function App() {
  return (
    <>
    <Login onProvider={googleLogin}/>
    <CardAndProfile/>
    </>
  );
}

export default App;
