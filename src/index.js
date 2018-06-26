import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
// import App2 from './components/App2';
import AppRouter from './AppRouter';
import registerServiceWorker from './registerServiceWorker';
import {Provider} from "react-redux"
import {createStore, compose, applyMiddleware} from "redux";
import thunk from "redux-thunk";
import setAuthToken from './utils/setAuthToken';
import rootReducer from './reducers'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
    rootReducer,
    composeEnhancers(applyMiddleware(thunk))
); 

store.subscribe(()=>{console.log(store.getState())}
    
)
const jsx = 
(<Provider store= {store} >
    <AppRouter/>
</Provider>)

setAuthToken(localStorage.getItem("authtoken"))

ReactDOM.render(jsx, document.getElementById('root'));
registerServiceWorker();
