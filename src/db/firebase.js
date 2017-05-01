import * as firebase from 'firebase'
// import * from 'firebase/auth'
// import * from 'firebase/database'
// import * from 'firebase/storage'

// Initialize firebaseapp for our store to access
var config = {
  apiKey: "AIzaSyAhQ_WpC7FGltdr-3JTIUVKBCbCBAA54w8",
  authDomain: "fleetmed-clinician.firebaseapp.com",
  databaseURL: "https://fleetmed-clinician.firebaseio.com/",
  projectId: "fleetmed-clinician",
  storageBucket: "fleetmed-clinician.appspot.com",
  messagingSenderId: "761559378615"
};

export default firebase.initializeApp(config)

//any reducers that need access to firebase will simply - import firebase as '../db/firebase'
