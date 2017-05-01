import { combineReducers } from 'redux'
// this reducer will eventually combine multiple reducers into one
import physicians from './physicianReducer'

export default combineReducers({
  physicians
})
