import * as React from 'react'
import '../../assets/css/style.css'

import Header from '../../components/Header'
import Footer from '../../components/Footer'

export default class Root extends React.Component<any, any> {
  renderDevTool() {
    if (process.env.NODE_ENV !== 'production') {
      const DevTools = require('mobx-react-devtools').default
      return <DevTools />
    }
  }

  render() {
    return (
      <div className="wrapper">
        <Header />
        <div className="content">
          {this.props.children}
          {this.renderDevTool()}
        </div>
        <Footer />
      </div>
    )
  }
}
