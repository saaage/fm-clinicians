import { combineForms } from 'react-redux-form'

const initialRegisterState = {
  name: '',
  experience: '',
  specialty: '',
  email: ''
}
// initial state of our registration form. MUST match the shape of our RegistrationForm component

export default combineForms({
  register: initialRegisterState
})
// combineForms() returns a reducer that contains all of our modelReducers and a single formReducer
