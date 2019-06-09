import React from 'react';

class Footer extends React.Component {
    render(){
        return(
            <footer id="fk-footer" className="container">
                <div className="row">
                    <p>We just created our AppRoute component where all parent components will be imported so they can be rendered on route match. We imported Router and Route from react-router and createHistory from history. The Router serves as the parent </p>
                </div>
            </footer>
        )
    }
}

export default Footer;