import React from 'react';
import ReactDOM from 'react-dom';
import Hero from './components/Hero'

class Home extends React.Component{

    render(){
        return(
            <div id="fk-home">
                <Hero />
            </div>
        )
    }
}

export default Home