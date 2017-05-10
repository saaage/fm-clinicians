
import App from './components/App'
import { AppContainer } from 'react-hot-loader'
import { Router, Route, IndexRoute } from 'react-router-dom'
import React from 'react'
import ReactDOM from 'react-dom'
 'react-hot-loader'
import { Provider } from 'react-redux'
import store from './store'


const render = (Component) => {
  ReactDOM.render(
    <AppContainer>
      <Provider store={store}>
        <Router history={Router.history}>
          <Route path="/" component={Component} />
        </Router>
      </Provider>
    </AppContainer>,
    document.getElementById('root')
  )
}

render(App)

if(module.hot) {
  module.hot.accept('./components/App', () => {
    render(App)
  })
}
