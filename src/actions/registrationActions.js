import { dbRefObject } from '../db/firebase'

export function registerUser(values){

  let userID = dbRefObject.push().key

  let newUser = {}
  newUser[userID] = values

  return function(dispatch) {
    dbRefObject.update(newUser).then((response) => {
      dispatch({type: "REGISTER_USER_FULFILLED", payload: response})
    }).catch((err) => {
      dispatch({type: "REGISTER_USER_REJECTED", payload: err})
    })
  }
}
