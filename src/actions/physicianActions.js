import axios from 'axios'

export function fetchPhysicians() {

  return function(dispatch) {
    axios.get('https://fleetmed-clinician.firebaseio.com/clinicians.json')
      .then((response) => {
        dispatch({type: "FETCH_PHYSICIANS_FULFILLED", payload: response.data})
      })
      .catch((err) => {
        dispatch({type: "FETCH_PHYSICIANS_REJECTED", payload: err})
      })
  }

}
