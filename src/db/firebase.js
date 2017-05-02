import * as firebase from 'firebase'

// Initialize firebaseapp for our store to access
var config = {
  apiKey: "AIzaSyAhQ_WpC7FGltdr-3JTIUVKBCbCBAA54w8",
  authDomain: "fleetmed-clinician.firebaseapp.com",
  databaseURL: "https://fleetmed-clinician.firebaseio.com/",
  projectId: "fleetmed-clinician",
  storageBucket: "fleetmed-clinician.appspot.com",
  messagingSenderId: "761559378615"
};

firebase.initializeApp(config)

export const dbRefObject = firebase.database().ref().child('clinicians')
