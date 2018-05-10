import React, { Component } from 'react';
import logo from './logo.svg';
import axios from 'axios';
import busy from './img/giphy.gif';
import './App.css';


class App extends Component {

  constructor(props){
    super(props);

     this.state = {cursor:false};

    this.onFormSubmit = this.onFormSubmit.bind(this);
  }

   sign = ()=>{
     const john = "john";
     
    console.log("testing")
  }
  
  onFormSubmit(e){
    e.preventDefault();
    console.log("attempting to log in ")
    console.log(this.refs)
    var {username, password}= this.refs;
    if(username.value !== "" && password.value!==""){
      alert("confirm");
      this.setState(()=>{
        return {cursor:true}
      })
      
      console.log(this.state);
    } 

  }//

  render() {
    var a = this.state;
     console.log(a);
    return (
      <div className="App">

      <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
             

      <div className="container">
        <div className="row">
          <div className="col-12 col-md-6 offset-md-3 ">

            <div className= "form-div">
                <form onSubmit={this.onFormSubmit}>
                    <div className="form-group">
                    <input ref= 'username' type="text" className="form-control" id="username" aria-describedby="emailHelp" placeholder="Enter email"/>
                     </div>
              
                    <div className="form-group">
                      
                        <input ref='password'   type="password" className="form-control" id="exampleInputPassword1" placeholder="Password"/>
                    </div>
                    {this.state.cursor ? <img src={busy}/> : <button type= "submit" className="button btn-primary btn">Submit</button>  }
                                     
                                   
            
                </form>
             </div>
                
         </div>
    

        </div>
      
      </div> 

      
        
      </div>
    );
  }
}

export default App;


