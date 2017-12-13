import * as React from 'react'
import styled from 'react-emotion'
import { RouteComponentProps } from 'react-router'
import { inject, observer } from 'mobx-react'

import Source from '../../components/Source'
import GridStore from '../../stores/Grid'
import RouterStore from '../../stores/Router'

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

interface DashboardProps {
  grid: GridStore
}
interface DashboardState {}

@inject('grid')
@observer
export default class Dashboard extends React.Component<DashboardProps, DashboardState> {
  render() {
    const { grid: { template, activeSources } } = this.props

    return (
      <StyledDashboard template={`'${template.join("' '")}'`}>
        <h4 className="content-title">Dashboard</h4>
        <div className="grid">{activeSources.map((source, index) => <Source key={index} source={source} />)}</div>
      </StyledDashboard>
    )
  }
}
