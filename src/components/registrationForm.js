// This component will render a registration form
// If form passes validation, we will push into the database

import React from 'react'
import { Control, Form, actions } from 'react-redux-form'
import { registerUser } from '../actions/registrationActions'
import { connect } from 'react-redux'

@connect((store) => { return {} })

class RegistrationForm extends React.Component {

  handleSubmit(values) {
    // this.props.dispatch(registerUser(values))

  }

  isEmail(userEmail) {
      console.log(userEmail)
  }

  render() {

    return (
      <Form name="registration" model="forms.registration" onSubmit={ values => this.handleSubmit(values)}>
        <Control.text model="registration.name" maxLength="25" placeholder="Name" required />
        <Control.text type="number" max="99" model="registration.experience" placeholder="Experience" required />
        <Control.text model="registration.specialty" placeholder="Specialty" required/>
        {/* change to drop-down */}
        <Control.text type="email" model="registration.email" placeholder="Email" required />
        <button type="submit">Submit</button>
      </Form>
    )
  }
}

export default RegistrationForm
