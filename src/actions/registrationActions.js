import { dbRefObject } from '../db/firebase'

let userID = dbRefObject.push().key

let updatePromise = new Promise(function(){})

export function registerUser(values){
  let newUser = {}
  newUser[userID] = values
  return function(dispatch) {
    dbRefObject.update(newUser)
  }
}
