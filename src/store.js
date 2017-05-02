import { applyMiddleware, createStore } from 'redux'
// applyMiddleWare allows us to combine multiple middleware into one object. We can the returned value into our new store object.
import logger from 'redux-logger'
// logger is a dev-dependency and logs action statuses in the console
import promise from 'redux-promise-middleware'
import thunk from 'redux-thunk'
import reducer from './reducers'
// Reducers respond to a specific action.type and return new state trees, incorporating the data it receives from the action.payload

const middleware = applyMiddleware(promise(), thunk, logger())
//combine our middleware into one variable

export default createStore(reducer, middleware)
// export the result of createStore() which will be passed to Provider as a prop. Provider will provide the option of 'store acess' to all of the components in our app
