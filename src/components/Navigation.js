import React, { useState } from 'react';
import { Stack } from '@chakra-ui/layout';
import { Collapse, NavLink, Navbar, NavbarToggler, Nav } from 'reactstrap';
import {
  Link,
  useLocation
} from "react-router-dom"

const Navigation = (props) => {
  const [collapsed, setCollapsed] = useState(false);
  const toggleNavbar = () => setCollapsed(!collapsed);
  let location = useLocation();
  console.log(location)



  return (
    <Stack>

      <Navbar>
      
          <Nav>
            <NavLink className={location.pathname === '/about' ? 'active' : ''}>
              <Link to='/'>About</Link>
            </NavLink>
            <NavLink className={location.pathname === '/portfolio' ? 'active' : ''}>
              <Link to='/portfolio'>Portfolio</Link>
            </NavLink>
            <NavLink className={location.pathname === '/resume' ? 'active' : ''}>
              <Link to='/resume'>Resume</Link>
            </NavLink>
            <NavLink className={location.pathname === '/contact' ? 'active' : ''}>
              <Link to='/contact'>Contact</Link>
            </NavLink>
          </Nav>
     
      </Navbar>
    </Stack>
  );
}


export default Navigation;
