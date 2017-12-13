import * as React from 'react'
import styled from 'react-emotion'
import { Children } from 'react'
import { observer } from 'mobx-react'

import { SourceModel } from '../../stores/Grid'
import { ProviderStore } from '../../stores/Providers'

const StyledSource = styled<any, any>('div')`
  overflow: scroll;
  padding: 20px;
  border-radius: 5px;
  background-clip: padding-box;
  background-color: #ffffff;
  box-shadow: 0 0 24px 0 rgba(0, 0, 0, 0.06), 0 1px 0 0 rgba(0, 0, 0, 0.02);
`

interface SourceProps {
  source: SourceModel
}
interface SourceState {}

@observer
export default class Source extends React.Component<SourceProps, SourceState> {
  componentDidMount() {
    const { source: { provider } } = this.props

    provider.fetchData()
  }
  render() {
    const { source: { targetArea, provider: { config, data } } } = this.props

    return (
      <StyledSource className={targetArea}>
        <span>{config.name}</span>
        <ul>{data.map(item => <li>{item}</li>)}</ul>
      </StyledSource>
    )
  }
}
