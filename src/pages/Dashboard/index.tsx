import * as React from 'react'
import styled from 'react-emotion'

const StyledDashboard = styled('div')`
  height: 100%;

  & .content-title {
    font-size: 20px;
    margin-bottom: 0;
    margin-top: 0;
    line-height: 50px;
  }

  & .grid {
    display: grid;
    height: calc(100% - 50px);
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: repeat(8, 1fr);
    grid-gap: 15px;
    grid-template-areas:
      'source1 source1 source2 source2'
      'source1 source1 source2 source2'
      'source1 source1 source2 source2'
      'source3 source3 source5 source5'
      'source3 source3 source5 source5'
      'source4 source4 source5 source5'
      'source4 source4 source5 source5'
      'source4 source4 source5 source5';

    & .source {
      padding: 20px;
      border-radius: 5px;
      background-clip: padding-box;
      background-color: #ffffff;
      box-shadow: 0 0 24px 0 rgba(0, 0, 0, 0.06), 0 1px 0 0 rgba(0, 0, 0, 0.02);
    }

    & .source1 {
      grid-area: source1;
    }

    & .source2 {
      grid-area: source2;
    }

    & .source3 {
      grid-area: source3;
    }

    & .source4 {
      grid-area: source4;
    }

    & .source5 {
      grid-area: source5;
    }
  }
`
export default class Dashboard extends React.Component<any, any> {
  render() {
    return (
      <StyledDashboard>
        <h4 className="content-title">Dashboard</h4>
        <div className="grid">
          <div className="source source1">Source 1</div>
          <div className="source source2">Source 2</div>
          <div className="source source3">Source 3</div>
          <div className="source source4">Source 4</div>
          <div className="source source5">Source 5</div>
        </div>
      </StyledDashboard>
    )
  }
}
