import * as React from 'react'
import * as ReactDOM from 'react-dom'
import { createBrowserHistory } from 'history'
import { useStrict } from 'mobx'
import { Provider } from 'mobx-react'
import { Router, Route, Switch } from 'react-router'

import getRootStore from './stores'
import App from './pages/App'
import Dashboard from './pages/Dashboard'

// Generic css
import '../src/assets/css/style.css'

const history = createBrowserHistory()
const rootStore = getRootStore(history)

// Dev
const renderDevTool = () => {
  if (process.env.NODE_ENV !== 'production') {
    window['store'] = rootStore

    const DevTools = require('mobx-react-devtools').default
    return <DevTools />
  }
}

// render react DOM
ReactDOM.render(
  <Provider {...rootStore}>
    <App>
      {renderDevTool()}
      <Router history={history}>
        <Switch>
          <Route path="/" component={Dashboard} />
        </Switch>
      </Router>
    </App>
  </Provider>,
  document.getElementById('app')
)
