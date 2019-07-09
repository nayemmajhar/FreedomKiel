import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import './App.css';
import Header from './components/Header/index';
import Footer from './components/Footer';
import Home from './pages/Home/index'
import Bikes from './pages/Bikes/index'
import BikeSingle from './pages/BikeSingle/index';
import Users from './pages/Users/index'
import Login from './pages/Users/Components/Login'
import Register from './pages/Users/Components/Register'



function App() {
	return (
		<div className="App">
			
			<BrowserRouter>
				<Header />
				<Route exact path="/" component={Home} />
				<Route path="/bikes" component={Bikes} />
				<Route path="/Help" component={Help} />
				<Route path="/bike/:id" component={BikeSingle} />
				<Route path="/login" component={Login} />
				<Route path="/register" component={Register} />
				<Route path="/profile" component={Users} />
				<Footer/>
			</BrowserRouter>
			
		</div>
	);
}

function Help() {
  return (
      <div>
        <h2>Help</h2>
      </div>
  );
}

export default App;
