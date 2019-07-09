import React from 'react';
import { NavLink } from 'react-router-dom';
import { Nav, NavItem } from 'reactstrap';

class Header extends React.Component{
    render(){
        return(
            <div id="navbarCollapse" className="collapse navbar-collapse">
                <Nav className="navbar-nav ml-auto">
                    <NavItem className="nav-item">
                        <NavLink to="/" className="nav-link">Home</NavLink>
                    </NavItem>
                    <NavItem className="nav-item">
                        <NavLink to="/bikes" className="nav-link">Bikes</NavLink>
                    </NavItem>
                    <NavItem className="nav-item">
                        <NavLink to="/help" className="nav-link">Help</NavLink>
                    </NavItem>
                    <NavItem className="nav-item mt-3 mt-lg-0 ml-lg-3 d-lg-none d-xl-inline-block">
                        <NavLink to="/login" className="btn btn-primary">Login</NavLink>
                    </NavItem>
                </Nav>
            </div>
        )
    }
}

export default Header;