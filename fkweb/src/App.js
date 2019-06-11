import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import './App.css';
import Header from './components/Header/index';
import Footer from './components/Footer';
import Home from './pages/Home/index'



function App() {
	return (
		<div className="App">
			
			<BrowserRouter>
				<Header />
				<Route exact path="/" component={Home} />
				<Route path="/bikes" component={Bikes} />
				<Route path="/Help" component={Help} />
				<Footer/>
			</BrowserRouter>
			
		</div>
	);
}

function Bikes() {
  return (
      <div>
        <h2>Bikes</h2>
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
