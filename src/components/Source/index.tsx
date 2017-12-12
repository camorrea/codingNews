import * as React from 'react'
import * as classnames from 'classnames'

interface SourceProps {
  targetGridArea: string
}

const Source: React.SFC<SourceProps> = ({ targetGridArea, children }) => <div className={classnames('source', targetGridArea)}>{children}</div>

export default Source
