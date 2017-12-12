import * as React from 'react'
import styled from 'react-emotion'
import { RouteComponentProps } from 'react-router'
import { inject, observer } from 'mobx-react'

import Source from '../../components/Source'
import { STORE_GRID } from '../../stores/Grid'

interface StyledProps {
  template: string
}

const StyledDashboard = styled<StyledProps, any>('div')`
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
    grid-template-areas: ${props => props.template};

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

@inject(STORE_GRID)
@observer
export default class Dashboard extends React.Component<any, any> {
  shouldComponentUpdate(nextProps) {
    return true
  }
  render() {
    const { grid: { template, activeSources } } = this.props

    return (
      <StyledDashboard template={`'${template.join("' '")}'`}>
        <h4 className="content-title">Dashboard</h4>
        <div className="grid">
          {activeSources.map((source, index) => (
            <Source key={index} targetGridArea={source.targetArea}>
              <span>{React.createElement(source.component)}</span>
            </Source>
          ))}
        </div>
      </StyledDashboard>
    )
  }
}
