import React from 'react'
import { fetchPhysicians } from '../actions/physicianActions'
import { connect } from 'react-redux'
import RegistrationForm from './RegistrationForm'
import Navbar from './Navbar'

@connect((store) => {
// connect wraps a container component and injects props - it connects our react components and redux data
  return {}
  // return values are passed to the components as props
})

export default class App extends React.Component {

  constructor(props) {
      super(props)
  }

  componentWillMount() {
    this.props.dispatch(fetchPhysicians())
    // @connect also adds methods the dispatch object to props of the wrapped componenent
  }

  render() {
    return (
      <div>
        <Navbar />
        <RegistrationForm />
      </div>
    )
  }

}
