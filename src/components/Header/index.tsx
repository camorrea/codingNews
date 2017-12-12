import * as React from 'react'
import styled from 'react-emotion'

import userAvatar from 'assets/images/user-avatar.jpg'

const StyledHeader = styled('header')`
  grid-area: header;
  background-color: #2b3d51;
  line-height: 60px;
  padding: 0 12vh;

  & .left-section {
    & .logo {
      float: left;
      color: #ffffff !important;
      font-size: 20px;
      font-weight: 700;
      text-transform: uppercase;
      letter-spacing: 1px;
    }
  }

  & .menu {
    float: right;

    & ul.list-inline {
      margin: 0;
      padding-left: 0;
      list-style: none;

      & .list-inline-item {
        display: inline-block;
      }
    }

    & .nav-user {
      display: block;
      padding: 0 12px;

      & img {
        height: 36px;
        width: 36px;
        vertical-align: middle;
      }
    }
  }

  @media (max-width: 1000px) {
    padding: 0 6vh;
  }

  @media (max-width: 600px) {
    padding: 0 3vh;
  }
`

const Header: React.SFC<any> = () => (
  <StyledHeader>
    <div className="left-section">
      <a href="index.html" className="logo">
        <span>CodingNews</span>
      </a>
    </div>

    <div className="menu">
      <ul className="list-inline">
        <li className="list-inline-item">
          <a className="nav-user" href="#">
            <img src={userAvatar} alt="user" className="rounded-circle" />
          </a>
        </li>
      </ul>
    </div>
  </StyledHeader>
)

export default Header
