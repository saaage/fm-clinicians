import React from 'react'
import { fetchPhysicians } from '../actions/physicianActions'
import { connect } from 'react-redux'
import firebase from '../db/firebase'

let database = firebase.database()

@connect((store) => {
// NOTE - this style of using connect is called a decorator. It is NOT Recommended
// we have access to 'store' because it is a prop of Provider which is rendering all of our container components
// connect wraps Layout component and injects props - it connects our react components and redux data
// connect takes TWO functions. first function: gets store values and passes them as props
  return {
    data: store.clinicians
  };
  // return value of this first function gets passed to Layout as props
})

export default class App extends React.Component {

  componentWillMount() {

  this.props.dispatch(fetchPhysicians())
  // @connect adds methods from store as props to our App component
  // we will pass this dispatch our fetchPhysicians() API method


  }


  render() {
    const { clinicians } = this.props
    // if (!tweets.length) {
    //   return <button onClick={this.fetchTweets.bind(this)}>load tweets</button>
    // }
    //
    // const mappedTweets = tweets.map(tweet => <li>{tweet.text}</li>)

    return <div>
      <li>{clinicians}</li>
    </div>
  }
}
