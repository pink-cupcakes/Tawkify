import React from 'react';
import { Navbar, Nav, NavItem } from 'react-bootstrap';

const NavigationBar = () => {
  return (
    <Navbar className='navigation-bar'>
      <Nav className='navbar-home'>
        <NavItem href='#'>tawkify</NavItem>
      </Nav>
      <Nav className='navbar-content'>
        <NavItem href='#'>How It Works</NavItem>
        <NavItem href='#'>FAQ</NavItem>
        <NavItem href='#'>Stories</NavItem>
        <NavItem href='#'>Sign In</NavItem>
      </Nav>
      <Nav className='navbar-contact'>
        <NavItem href='#'>1 (888) 494-7280</NavItem>
      </Nav>
      <Nav className='navbar-referral' href='#'>
        <NavItem>
          <p>Chat with a love expert</p><hr/>
          <a>CLICK HERE FOR</a><br/>
          <a>FREE SCREENING</a>
        </NavItem>
      </Nav>
    </Navbar>
  )
}

export default NavigationBar;