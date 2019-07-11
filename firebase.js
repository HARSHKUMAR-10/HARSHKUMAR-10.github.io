var app_firebase = {};

(function(){
	 // Initialize Firebase
  var config = {
    apiKey: "AIzaSyBI4PXO13seM3rVu0yEEVSkOuflLjGG6Y0",
    authDomain: "project1-400f9.firebaseapp.com",
    databaseURL: "https://project1-400f9.firebaseio.com",
    projectId: "project1-400f9",
    storageBucket: "project1-400f9.appspot.com",
    messagingSenderId: "243549019154"
  };
  firebase.initializeApp(config);
  app_firebase = firebase;
})()