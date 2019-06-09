import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from './../../img/logo.png'

class Logo extends React.Component{
    render(){
        return(
            <div className="logo">
                <NavLink to="/"><img src={logo} alt="FreedomKiel" /></NavLink>
            </div>
        )
    }
}

export default Logo;