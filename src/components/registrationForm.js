// This component will render a registration form
// If form passes validation, we will push into the database

import React from 'react'
import { Control, Form, actions } from 'react-redux-form'
import { registerUser } from '../actions/registrationActions'
import { connect } from 'react-redux'

@connect((store) => {
  return {}
})

class RegistrationForm extends React.Component {

  handleSubmit(values) {
    //handleSubmit will call an action that pushes our new values to the DB
    this.props.dispatch(registerUser(values))
  }

  render() {

    return (
      <Form model="forms.registration" onSubmit={ values => this.handleSubmit(values)}>
        <Control.text model="registration.name" placeholder="Name" />
        <Control.text model="registration.experience" placeholder="Experience" />
        <Control.text model="registration.specialty" placeholder="Specialty" />
        <Control.text model="registration.email" placeholder="Email" />
        <button type="submit">Submit</button>
      </Form>
    )
  }
}

export default RegistrationForm
