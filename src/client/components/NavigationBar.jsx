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
      <Nav className='navbar-referral'>
        <NavItem href='#'>
          Chat with a love expert<br/><hr/>
          <b>CLICK HERE FOR</b><br/>
          <b>A FREE SCREENING</b>
        </NavItem>
      </Nav>
    </Navbar>
  )
}

export default NavigationBar;