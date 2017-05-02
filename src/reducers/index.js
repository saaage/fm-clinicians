import { combineReducers } from 'redux'
// this reducer will eventually combine multiple reducers into one
import physicians from './physicianReducer'
import forms from './formReducer'

export default combineReducers({
  physicians, forms
})
// returns a single reducer
