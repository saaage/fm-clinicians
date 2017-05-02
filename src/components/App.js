import React from 'react'
import { fetchPhysicians } from '../actions/physicianActions'
import { connect } from 'react-redux'
import RegistrationForm from './RegistrationForm'

@connect((store) => {
// NOTE - this style of using connect is called a decorator. It is NOT Recommended
// we have access to 'store' because it is a prop of Provider which is rendering the rest of our components
// connect wraps a container component and injects props - it connects our react components and redux data
// connect takes TWO functions. first function: gets store values and passes them as props
  return {
    initialFormState: store.forms.register
  }
  // return value of this first function gets passed to Layout as props
})

export default class App extends React.Component {

  constructor(props) {
      super(props)

      this.addUser = this.addUser.bind(this)
  }

  componentWillMount() {

    this.props.dispatch(fetchPhysicians())
    // @connect adds methods from store as props to our App component, including dispatch
    // we will pass this dispatch our fetchPhysicians() action

  }

  addUser() {
    console.log("User Added :)");
    console.log(this.props.initialFormState);
  }

  render() {

    return <RegistrationForm />

  }
}
