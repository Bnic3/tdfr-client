import React from 'react';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Login  from "./components/Login";


const AppRouter  = () => {
    return (
        <Router>
        <Switch>
            <Route exact path="/" component={Home}/>
            <Route path = "/about" component={About} />        
            <Route path = "/login" component={Login} />        
        </Switch>   
        </Router>  
    ) 
}

const Home = () =>(
    <div>
    <h2>Home</h2>
    </div>
)

const About = () =>(
    <div>
    <h2>About</h2>
    </div>
)
 
export default AppRouter ;