import React from 'react';
import ReactDOM from 'react-dom';
import { Navbar, Nav, NavItem } from 'react-bootstrap';

import css from './style.css';
import Proxima from './assets/fonts/ProximaNova-Black.otf';

class Index extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <div>
        <Navbar className='navigation-bar'>
          <Nav className='navbar-home'>
            <NavItem href="#">tawkify</NavItem>
          </Nav>
          <Nav className='navbar-content'>
            <NavItem href="#">How It Works</NavItem>
            <NavItem href="#">FAQ</NavItem>
            <NavItem href="#">Stories</NavItem>
            <NavItem href="#">Sign In</NavItem>
          </Nav>
          <Nav className='navbar-contact'>
            <NavItem href="#">1 (888) 494-7280</NavItem>
          </Nav>
          <Nav className='navbar-referral'>
            <NavItem href="#">
              Chat with a love expert<br/><hr/>
              CLICK HERE FOR<br/>
              A FREE SCREENING
            </NavItem>
          </Nav>
        </Navbar>
      </div>
    );
  }
}

ReactDOM.render(<Index />, document.getElementById('app'));