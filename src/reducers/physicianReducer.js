//physicianReducer should declare an initial state and provide a set of possiblel returns depending on what type of action has been dispatched

let initialState = {}

export default function reducer(state = initialState, action) {

  switch (action.type) {
    case "FETCH_PHYSICIANS_FULFILLED":
      return {...state, allPhysicians: action.payload }
    default:
      return state
  }
}
