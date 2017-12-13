import * as React from 'react'
import * as classnames from 'classnames'
import { Children } from 'react'

interface SourceProps {
  targetGridArea: string
  children?: React.ReactNode
}

const Source: React.SFC<SourceProps> = ({ targetGridArea, children }) => <div className={classnames('source', targetGridArea)}>{children}</div>

export default Source
