import React from 'react';
import Logo from './../Logo/index';
import Navigation from './components/Navigation';
import './css/header.css'

class Header extends React.Component{
    render(){
        return(
            <header id="fk-header">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-4">
                            <Logo />
                        </div>
                        <div className="col-sm-8">
                            <div className="row">
                                <div className="col-sm-9">
                                    <Navigation />
                                </div>
                                <div className="col-sm-3">Login</div>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
        )
    }
}

export default Header;