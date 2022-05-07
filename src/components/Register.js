import axios from "axios";
import React, { Component } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

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
        <div className="container">
            <form onSubmit={this.handleSubmit}>
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
                    <input type='text' class="form-control" name='email' value={email} onChange={this.handleChange} required></input>
                </div>
                <div class="form-group">
                    <label for="phone">Phone</label>
                    <input type='text' class="form-control" name='phone' value={phone} onChange={this.handleChange} required></input>
                </div>

                <button type="submit" class="btn btn-primary">Submit</button>
            </form>
        </div>    
                // <form onSubmit={this.handleSubmit}>
                //     <Form.Group className="mb-3">
                //     <div>
                //         <Form.Label>UserName</Form.Label>
                //         <input type='text' name='username' value={username} onChange={this.handleChange}></input>
                //     </div>
                //     </Form.Group>
                //     <div>
                //         <label>Password</label>
                //         <input type='password' name='password' value={password} onChange={this.handleChange}></input>
                //     </div>
                //     <div>
                //         <label>E-Mail</label>
                //         <input type='text' name='email' value={email} onChange={this.handleChange}></input>
                //     </div>
                //     <div>
                //         <label>Phone</label>
                //         <input type='text' name='phone' value={phone} onChange={this.handleChange}></input>
                //     </div>
                //     <div>
                //         <button type='submit'>Register</button>
                //     </div>
                // </form>
            
        )
    }
}

export default Register