
import App from './components/App'
import { AppContainer } from 'react-hot-loader'
import React from 'react'
import ReactDOM from 'react-dom'
 'react-hot-loader'
import { Provider } from 'react-redux'
import store from './store'


const render = (Component) => {
  ReactDOM.render(
    <AppContainer>
      <Provider store={store}>
        <Component />
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
