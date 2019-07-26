import React from 'react';
import { NavLink } from 'react-router-dom';
import { Nav, NavItem } from 'reactstrap';
import {Redirect} from 'react-router-dom';

class Header extends React.Component{

    constructor(props){
        super(props);

        this.state ={
            isLogedIn: localStorage["userAuth"] && JSON.parse(localStorage["userAuth"]).auth_token
            ? true: false,
        }

        this.theLogoutHandle = this.theLogoutHandle.bind(this)
    }

    theLogoutHandle(e){
        e.preventDefault();

        localStorage.removeItem('userAuth')

        this.setState({
            isLogedIn:false
        })

        return(
            <Redirect to="/login" />
        )
    }

    render(){
        
        return(
            <div id="navbarCollapse" className="collapse navbar-collapse">
                <Nav className="navbar-nav ml-auto">
                    <NavItem className="nav-item">
                        <NavLink to="/" className="nav-link">Home</NavLink>
                    </NavItem>
                    <NavItem className="nav-item">
                        <NavLink to="/help" className="nav-link">Help</NavLink>
                    </NavItem>
                    {
                        this.state.isLogedIn?
                        <NavItem className="nav-item">
                            <NavLink to="/profile" className="nav-link">Profile</NavLink>
                        </NavItem>
                        :''
                    }
                    <NavItem className="nav-item mt-3 mt-lg-0 ml-lg-3 d-lg-none d-xl-inline-block">
                        {
                            this.state.isLogedIn?
                              <NavLink to="/" onClick={this.theLogoutHandle} className="btn btn-primary">Logout</NavLink>
                            : <NavLink to="/login" className="btn btn-primary">Login</NavLink>
                        }
                        
                    </NavItem>
                </Nav>
            </div>
        )
    }
}

export default Header;