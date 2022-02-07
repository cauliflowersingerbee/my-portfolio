import React from 'react';
import {
  Nav,
  NavLink,
  Bars,
  NavMenu,
  NavBtn,
  NavBtnLink,
} from './NavbarElements';

const Navbar = () => {
    return (
        <>
        <Nav>
            <Bars>
                <NavMenu>
                    <NavLink to='home'>
                        Home
                    </NavLink>
                    <NavLink to='about'>
                        About
                    </NavLink>
                    <NavLink to='work'>
                        Work
                    </NavLink>
                    <NavLink to='contact'>
                        Contact
                    </NavLink>
                </NavMenu>
            </Bars>
        </Nav>
        </>
    )
}
