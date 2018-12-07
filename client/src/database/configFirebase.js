import * as firebase from 'firebase';
var config = {
    apiKey: "AIzaSyCOa18xBhf9LM9mjKJidU77vJGADgIqMgM",
    authDomain: "mynoteapp-5d57a.firebaseapp.com",
    databaseURL: "https://mynoteapp-5d57a.firebaseio.com",
    projectId: "mynoteapp-5d57a",
    storageBucket: "mynoteapp-5d57a.appspot.com",
    messagingSenderId: "369590558941"
};
export const connectFirebase = firebase.initializeApp(config);