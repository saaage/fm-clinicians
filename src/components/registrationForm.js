// This component will render a registration form
// It accepts a prop as a callback to addUser(), which lives inside of RegistrationForm's parent component App.js

import React from 'react'
import { Control, Form, actions } from 'react-redux-form'

export default class RegistrationForm extends React.Component {

  constructor(props){
    super(props)
  }

  handleSubmit() {
    console.log('handleSubmit was called')
  }

  render() {
    return (
      <Form model="registration" onSubmit={(user) => this.handleSubmit(user)}>
        <Control.text model="registration.name" placeholder="Name" />
        <Control.text model="registration.experience" placeholder="Experience" />
        <Control.text model="registration.specialty" placeholder="Specialty" />
        <Control.text model="registration.email" placeholder="Email" />
        <button type="submit">Submit</button>
      </Form>
    )
  }
}
