var firebase = require('firebase');

firebase.initializeApp({
    apiKey: "AIzaSyDO6H_crOY8FEKllLAGlm91xMXCKbl5gUQ",
    authDomain: "lassie-8224e.firebaseapp.com",
    serviceAccount: "LASSIE-a580bc838978.json",
    databaseURL: "https://lassie-8224e.firebaseio.com",
    projectId: "lassie-8224e",
    storageBucket: "lassie-8224e.appspot.com",
    messagingSenderId: "987089950504"
});

var sessionRef = firebase.database().ref('lassie/sessions');
var clientRef = firebase.database().ref('lassie/clients');
var userRef = firebase.database().ref('lassie/users');

var db = {
    sessionRef: sessionRef,
    clientRef: clientRef,
    userRef: userRef
};

// var db = "Hi, Kiondra";
module.exports = db;



