// This component will render a registration form
// If form passes validation, we will push into the database

import React from 'react'
import { Control, Form, actions, modelReducer } from 'react-redux-form'
import { registerUser } from '../actions/registrationActions'
import { connect } from 'react-redux'
import styles from './RegistrationForm.css'

const initialRegisterState = {
  name: '',
  experience: '',
  specialty: '',
  email: ''
}

@connect((store) => { return {
  users: store.physicians.allPhysicians
} })

class RegistrationForm extends React.Component {

  handleSubmit(values) {
    this.props.dispatch(registerUser(values))
    // this.props.dispatch(actions.setInitial('registration'))
  }

  isEmail(userEmail) {
      console.log(userEmail)
  }

  render() {

    return (
        <main className={styles.main}>
          <Form className={styles.registrationForm} name="registration" model="forms.registration" onSubmit={ values => this.handleSubmit(values)}>
            <h1 className={styles.registrationForm__label}>ABOUT YOU</h1>
          <Control.text className={styles.registrationForm__input} model="registration.name" maxLength="25" placeholder="Name" required />
          <Control.text className={styles.registrationForm__input} type="number" max="99" model="registration.experience" placeholder="Experience" required />
          <Control.text className={styles.registrationForm__input} model="registration.specialty" placeholder="Specialty" required/>
          <Control.text className={styles.registrationForm__input} type="email" model="registration.email" placeholder="Email" required />
          <span className={styles.registrationForm__saveSection}><button className={styles.registrationForm__save} type="submit">SAVE</button></span>
        </Form>
      </main>
    )
  }
}

export default RegistrationForm
