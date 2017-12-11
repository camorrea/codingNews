import * as React from 'react'
import styled from 'react-emotion'

const StyledFooter = styled('footer')`
  grid-area: footer;
  color: #58666e;
  text-align: center;
  padding-top: 10px;
`

const Footer: React.StatelessComponent<any> = () => <StyledFooter>2017 CodingNews</StyledFooter>

export default Footer
