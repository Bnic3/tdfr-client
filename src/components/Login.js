import React, { Component } from 'react';
import logo from '../logo.svg';
import axios from 'axios';
import busy from '../img/giphy.gif';
import '../App.css';


class Login extends Component {

  constructor(props){
    super(props);

     this.state = {cursor:false};

    this.onFormSubmit = this.onFormSubmit.bind(this);
  }
  
  onFormSubmit(e){
    e.preventDefault();
    console.log("attempting to log in ")
    
    var username= this.refs.username.value;
    var password= this.refs.password.value;
    if(username.value !== "" && password.value!==""){
      this.toggleState();
      axios.post('http://localhost:3001/users/login',{username,password})
      .then(response=>{
        this.toggleState();
        console.log(response.data.success);

        
      })
      .catch(e=>{
        console.log(e)
        this.toggleState();}); 

      // this.setState(()=>{
      //   return {cursor:true}
      // })


      
      console.log(this.state);
    } 

  }//

  toggleState(){

    this.setState((prevState)=>{
      return {...prevState,
        cursor:!prevState.cursor}
    })
  }; //end toggle
  render() {
    var a = this.state;
     console.log(a);
    return (
      <div className="App">

      <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to Fantasia</h1>
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

export default Login;


