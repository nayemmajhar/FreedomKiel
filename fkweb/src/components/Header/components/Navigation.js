import React from 'react';
import { NavLink } from 'react-router-dom';
import { Nav, NavItem } from 'reactstrap';

class Header extends React.Component{
    render(){
        return(
            <Nav className="ml-auto">
                <NavItem>
                    <NavLink to="/">Home</NavLink>
                </NavItem>
                <NavItem>
                    <NavLink to="/bikes">Bikes</NavLink>
                </NavItem>
                <NavItem>
                    <NavLink to="/Help">Help</NavLink>
                </NavItem>
            </Nav>
        )
    }
}

export default Header;