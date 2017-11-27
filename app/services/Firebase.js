import * as Firebase from 'firebase';

let config = {
  apiKey: "AIzaSyDtTFzVCsnDkECG7AmpDw1TAyFMmOrr2kg",
  authDomain: "sportswithfriends-d6d42.firebaseapp.com",
  databaseURL: "https://sportswithfriends-d6d42.firebaseio.com",
  projectId: "sportswithfriends-d6d42",
  // storageBucket: "sportswithfriends-d6d42.appspot.com",
  messagingSenderId: "965198178746"
};

export const firebaseRef = Firebase.initializeApp(config);