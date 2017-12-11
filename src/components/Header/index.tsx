import * as React from 'react'
import userAvatar from 'assets/images/user-avatar.jpg'

const Header: React.StatelessComponent<any> = () => (
  <header id="topnav">
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
  </header>
)

export default Header
