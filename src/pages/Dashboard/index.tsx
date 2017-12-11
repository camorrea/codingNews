import * as React from 'react'

export default class Dashboard extends React.Component<any, any> {
  render() {
    return (
      <div className="container">
        <h4 className="content-title">Dashboard</h4>
        <div className="grid">
          <div className="source source1">Source 1</div>
          <div className="source source2">Source 2</div>
          <div className="source source3">Source 3</div>
          <div className="source source4">Source 4</div>
          <div className="source source5">Source 5</div>
        </div>
      </div>
    )
  }
}
