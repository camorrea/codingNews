import * as React from 'react'
import * as ReactDOM from 'react-dom'
import { createBrowserHistory } from 'history'
import { useStrict } from 'mobx'
import { Provider } from 'mobx-react'
import { Router, Route, Switch } from 'react-router'

import App from './pages/App'
import Dashboard from './pages/Dashboard'

// enable MobX strict mode
useStrict(true)

// default fixtures for TodoStore
const defaultTodos = []

// prepare MobX stores
const history = createBrowserHistory()
const rootStores = {}

// render react DOM
ReactDOM.render(
  <Provider {...rootStores}>
    <App>
      <Router history={history}>
        <Switch>
          <Route path="/" component={Dashboard} />
        </Switch>
      </Router>
    </App>
  </Provider>,
  document.getElementById('app')
)
