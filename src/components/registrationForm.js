// This presentational component will render a registration form
// It accepts a prop as a callback to addUser(), which lives inside of RegistrationForm's parent component App.js

import React from 'react'

const RegistrationForm = (props) => {

  return (
    <form className="" name="newProvider" action="index.html" method="post">
      <input type="text" name="name" value="" placeholder="Name" />
      <input type="text" name="experience" value="" placeholder="Experience" />
      <input type="text" name="skill" value="" placeholder="Specialty" />
      <input type="email"  name="email" placeholder="Email" />
      <button type="button" onClick={props.addUser}>Submit</button>
    </form>
  )
}

export default RegistrationForm
