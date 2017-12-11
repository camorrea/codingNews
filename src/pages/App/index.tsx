import * as React from 'react'
import styled from 'react-emotion'

import Header from '../../components/Header'
import Footer from '../../components/Footer'

const StyledApp = styled('div')`
  display: grid;
  height: 100vh;
  grid-template-rows: 60px repeat(10, 1fr) 40px;
  grid-template-areas:
    'header'
    'content'
    'content'
    'content'
    'content'
    'content'
    'content'
    'content'
    'content'
    'content'
    'content'
    'footer';

  & .content {
    grid-area: content;
    margin: 0 12vh;
    height: 100%;
  }

  @media (max-width: 1000px) {
    & .content {
      margin: 0 6vh;
    }
  }

  @media (max-width: 600px) {
    & .content {
      margin: 0 3vh;
    }
  }
`

export default class Root extends React.Component<any, any> {
  renderDevTool() {
    if (process.env.NODE_ENV !== 'production') {
      const DevTools = require('mobx-react-devtools').default
      return <DevTools />
    }
  }

  render() {
    return (
      <StyledApp>
        <Header />
        <div className="content">
          {this.props.children}
          {this.renderDevTool()}
        </div>
        <Footer />
      </StyledApp>
    )
  }
}
