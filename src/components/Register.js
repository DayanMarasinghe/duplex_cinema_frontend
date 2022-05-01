import axios from "axios";
import React, { Component } from "react";

class Register extends Component{

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

    render(){
        const{username,password,email,phone} = this.state

        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <div>
                        <label>UserName</label>
                        <input type='text' name='username' value={username} onChange={this.handleChange}></input>
                    </div>
                    <div>
                        <label>Password</label>
                        <input type='password' name='password' value={password} onChange={this.handleChange}></input>
                    </div>
                    <div>
                        <label>Confirm Password</label>
                        <input type='password'></input>
                    </div>
                    <div>
                        <label>E-Mail</label>
                        <input type='text' name='email' value={email} onChange={this.handleChange}></input>
                    </div>
                    <div>
                        <label>Phone</label>
                        <input type='text' name='phone' value={phone} onChange={this.handleChange}></input>
                    </div>
                    <div>
                        <button type='submit'>Register</button>
                    </div>
                </form>
            </div>
        )
    }
}

export default Register