// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import firebase from 'firebase'

Vue.config.productionTip = false

var config = {
  apiKey: "AIzaSyC7oKhlb4SIQawIdcPQztfW3UgQDhOps8k",
  authDomain: "votableplayer.firebaseapp.com",
  databaseURL: "https://votableplayer.firebaseio.com",
  projectId: "votableplayer",
  storageBucket: "votableplayer.appspot.com",
  messagingSenderId: "1027066931724"
};
firebase.initializeApp(config);

/* eslint-disable no-new */
firebase.auth().onAuthStateChanged(function(user){
  // if(app){
    let app=new Vue({
      el: '#app',
      router,
      components: { App },
      template: '<App/>'
    })
  // }
});


