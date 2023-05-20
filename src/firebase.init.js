// Import the functions you need from the SDKs you need
import {initializeApp} from "firebase/app";
import {getAuth} from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyB_l3kQymGAOv_34iU9rEBpQGAMW0iQ6BM",
    authDomain: "transport-management-3f96b.firebaseapp.com",
    projectId: "transport-management-3f96b",
    storageBucket: "transport-management-3f96b.appspot.com",
    messagingSenderId: "328957512335",
    appId: "1:328957512335:web:b408888b64d7ef76597efa"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app)
export default auth;
