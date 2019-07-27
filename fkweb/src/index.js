import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import { createStore } from 'redux'

import './css/nouislider.css';
import './css/swiper.min.css';
import './css/style.css';
import './css/custom.css';
import App from './App';
import fkReducer from './reducers/index'


const store = createStore(fkReducer)


// import * as serviceWorker from './serviceWorker';

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>
,
document.getElementById('root')
);




// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
/* serviceWorker.unregister(); */
