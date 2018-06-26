import React, { Component } from 'react';
import logo from '../logo.svg';

import busy from '../img/giphy.gif';
import '../App.css';

import {connect}  from "react-redux";

import Validator from "validator";
import  isEmpty from "lodash/isEmpty";
import PropTypes from "prop-types";



import { login, logintimeout, toggleState } from './../actions/loginAction';



class Login extends Component {

  constructor(props){
    super(props);
     this.state = {username: "",
                   password:"",
                  cursor: false};
    //this.onFormSubmit = this.onFormSubmit.bind(this);
  }

  validateFormInput=(data)=>{
    const errors = {};
    if(Validator.isEmpty(data.username)){
      errors.username = "This field is required";
    }
    if(Validator.isEmpty(data.password)){
      errors.password = "This field is required";
    }

    return {
      errors,
      isValid: isEmpty(errors)
    }

  }  
  
   onFormSubmit= async (e)=>{
    e.preventDefault();

    const {username, password} = this.state;
    console.log(`attempting to log in with ${username} and ${password}`)
    
    const {errors, isValid} = this.validateFormInput(this.state)
    console.log("errors" +errors)
    console.log("cursot "+ this.state.cursor)
   
    if(isValid){  
      this.setState({ cursor:true  });
    const cursor = await this.props.login(this.state)
    this.setState({cursor});
    } 

  }
  
  formHandler = (e)=>{
    this.setState({[e.target.name]: e.target.value}) 
  }

  

  render() {

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
                    <input name= 'username' value = {this.state.username} onChange = {this.formHandler}
                    type="text" className="form-control" aria-describedby="emailHelp" placeholder="Enter username"/>
                     </div>
              
                    <div className="form-group">                      
                        <input name='password'   value = {this.state.password} onChange = {this.formHandler}
                        type="password" className="form-control" id="exampleInputPassword1" placeholder="Password"/>
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
Login.propTypes = {
  login: PropTypes.func.isRequired
}

const mapDispatchToProps= (dispatch)=>({
dispatch,
login
})
 


export default connect(undefined,{login})(Login);
