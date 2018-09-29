// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import firebase from 'firebase'
import VueYoutube from 'vue-youtube'

Vue.use(VueYoutube)

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

let app;
firebase.auth().onAuthStateChanged(user => {
  if(!app){
    app = new Vue({
      el: '#app',
      router,
      components: { App },
      template: '<App/>'
    })
  }
});


