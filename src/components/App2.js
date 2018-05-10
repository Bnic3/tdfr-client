import React from 'react';
import {BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import Login from './Login';
import Main from './Main';

const App2 = ()=>{
return (
    <div>
        <Router>
        <Switch>
            <Route exact path="/" exact={true}
            render ={()=>(
             true && (<Redirect to="/Main"/>)   
           )} />
            <Route path="/users" component={Main}/>               
        </Switch>
        </Router>
    </div>
);

}

export default App2