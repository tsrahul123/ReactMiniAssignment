import React from 'react';
import {
  Nav,
  NavLink,
  Bars,
  NavMenu,
  NavBtn,
  NavBtnLink
} from './NavbarElements';

const Navbar = () => {
  return (
    <>
      <Nav>
        <NavLink to='/'>
          <img src={require('../../../images/logo.svg')} alt='logo' />
        </NavLink>
        <Bars />
        <NavMenu>
          <NavLink to='/' activeStyle>
            Electic Car
          </NavLink>
          <NavLink to='/booking' activeStyle>
            My Booking
          </NavLink>
          <NavLink to='/suitabilitytool' activeStyle>
            Suitability tool
          </NavLink>
          <NavLink to='/suitabilitytool' activeStyle>
            Sign Out
          </NavLink>
          {/* Second Nav */}
          {/* <NavBtnLink to='/sign-in'>Sign In</NavBtnLink> */}
        </NavMenu>
        
      </Nav>
    </>
  );
};

export default Navbar;
