import FBSDK, { LoginManager, AccessToken, GraphRequest, GraphRequestManager } from 'react-native-fbsdk'
import { Actions } from 'react-native-router-flux'
import firebase from 'firebase'

import { writeUserData } from './Firebase.js'

export function _fbAuth() {

      // TODO: Add user_hometown, user_birthday, user_location when ready to subbit review to facebook
      LoginManager.logInWithReadPermissions(['public_profile', 'email']).then(function(result) {
         if (result.isCancelled) {
            console.log('Login was cancelled')
         } else {
            AccessToken.getCurrentAccessToken().then(function(accessTokenData) {

               const credential = firebase.auth.FacebookAuthProvider.credential(accessTokenData.accessToken)
               firebase.auth().signInWithCredential(credential).then(function(result) {
                  // Promise was successful

                  const responseDataCallback = (error, result) => {
                     if (error) {
                        console.log(error)
                     } else {
                        writeUserData(result.id, result.email, result.first_name, result.last_name, result.picture.data.url)

                        return Actions.pagecontrol()
                     }
                  }

                  const dataRequest = new GraphRequest(
                     '/me',
                     {
                        accessToken: accessTokenData.accessToken.toString(),
                        parameters: {
                           fields: {
                              string: 'id, first_name, last_name, email, picture'
                           }
                        }
                     },
                     responseDataCallback
                  )

                  new GraphRequestManager().addRequest(dataRequest).start()
               }, function(error) {
                  // Promise was rejected
                  console.log(error)
               })
            })
         }
      }, function(error) {
         console.log('Some error occured:' + error)
      })
   }