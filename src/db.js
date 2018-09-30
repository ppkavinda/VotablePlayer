import firebase from 'firebase'

var config = {
    apiKey: "AIzaSyC7oKhlb4SIQawIdcPQztfW3UgQDhOps8k",
    authDomain: "votableplayer.firebaseapp.com",
    databaseURL: "https://votableplayer.firebaseio.com",
    projectId: "votableplayer",
    storageBucket: "votableplayer.appspot.com",
    messagingSenderId: "1027066931724"
  };
  let appdb=firebase.initializeApp(config);
  
export const db = appdb.database();