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

const database = firebaseRef.database()

///TODO: take added arguments
export function writeUserData(userID, email, firstName, lastName, profilePicture) {
  let user = database.ref('users/').child(userID)
  console.log(user);

  if (!user) {
    database.ref('users/' + userID).set({
      first_name: firstName,
      last_name: lastName,
      profile_picture: profilePicture,
      email: email
    })
  }
}

export function fetchUserData(userID) {
  database.ref('users/' + userID).once('value').then(function(snapshot) {
    if (!snapshot) {
      console.log('An error has occurred');
    } else {
      this.setState({userData: snapshot.val()})
    }
  })
}