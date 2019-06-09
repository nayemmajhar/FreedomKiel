import React from 'react';
import Logo from './../../Logo/index'


class FooterBottom extends React.Component {
    render(){
        return(
            <div id="footer-bottom" className="row">
                <div className="col-md-12">
                    <Logo />
                    <p className="text-center">copyright &copy; 2019, FreedomKiel</p>
                </div>
            </div>
        )
    }
}

export default FooterBottom;