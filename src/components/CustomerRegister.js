import axios from "axios";
import React, { Component } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

class CustomerRegister extends Component{

constructor(props){
    super(props)

    this.state={
        username:'',
        password:'',
        email:'',
        phone:''
    }
}

handleChange =(e) =>{
    this.setState({
        [e.target.name]: e.target.value
    })
}

handleSubmit =(e) =>{
    e.preventDefault()
    axios.post('http://localhost:4000/customers',this.state,{

    })
    .then(response =>{
        console.log(response)
    })
}

clearAll = () => { 
    document.getElementById("regForm").reset();
  }

    render(){
        const{username,password,email,phone} = this.state

        return (
        <div className="container" style={{width: 500}}>
            <form id="regForm" onSubmit={this.handleSubmit}>
                <br></br>
            <div class="form-group">
                    <label for="username">UserName</label>
                    <input type='text' class="form-control" name='username' value={username} onChange={this.handleChange} required></input>
                </div>
                <div class="form-group">
                    <label for="password">Password</label>
                    <input type='password' class="form-control" name='password' value={password} onChange={this.handleChange} required></input>
                </div>
                <div class="form-group">
                    <label for="email">Email address</label>
                    <input type='email' class="form-control" name='email' value={email} onChange={this.handleChange} required aria-describedby="emailHelp"></input>
                </div>
                <div class="form-group">
                    <label for="phone">Phone</label>
                    <input type='text' class="form-control" name='phone' value={phone} onChange={this.handleChange} required></input>
                </div>
                <br></br>
                <button type="submit" class="btn btn-primary" style={{width: 250}}>Submit</button>
                <button type="submit" class="btn btn-danger" style={{width: 200}} onClick={()=>this.clearAll()}>Clear All</button>
            </form>

            <br></br>
        </div>    

            
        )
    }
}

export default CustomerRegister;