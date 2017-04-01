import React from 'react';
import { Link } from 'react-router';
import { LoginLink, LogoutLink, Authenticated, NotAuthenticated } from 'react-stormpath';

class Header extends React.Component {
  render() {
    return (
      <nav className="navbar navbar-default navbar-static-top">
        <div className="container">
          <div id="navbar-collapse" className="collapse navbar-collapse">
            <ul className="nav navbar-nav">
            <NotAuthenticated>
              <li>
              <LoginLink />
              </li>
              </NotAuthenticated>
              <li><Link to="/">Home</Link></li>
            <Authenticated>
               <li>
                <Link to="/profile">Profile</Link>
                </li>
            </Authenticated>
            <Authenticated>
              <li>
                <LogoutLink />
              </li>
            </Authenticated>
            <NotAuthenticated>
              <li>
                <Link to="/register">Create Account</Link>
              </li>
            </NotAuthenticated>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}
export default Header
