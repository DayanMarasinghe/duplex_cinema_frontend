import React, { Component } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from "axios";

class CustomerLogin extends Component{

    constructor(props){
        super(props)
    
        this.state={
            username:'',
            password:''
        }
    }
    
    handleChange =(e) =>{
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    
    handleSubmit =(e) =>{
        e.preventDefault()
        axios.post('http://localhost:4000/customers/login',this.state,{

        })
        .then(response =>{
            window.location.href = "/movieview"
            console.log(response)
        }).catch(error=>{
            console.error(error)
            alert("Invalid credentials")
        })
    }

    render(){
        const{username,password} = this.state

        return(
            <div className="container" style={{width: 500}}>
                <br></br>
            <form onSubmit={this.handleSubmit}>
                <div class="mb-3">
                    <label for="username" class="form-label">UserName</label>
                    <input type="text" class="form-control" name="username" value={username} onChange={this.handleChange} required/>
                </div>
                <div class="mb-3">
                    <label for="password" class="form-label">Password</label>
                    <input type="password" class="form-control" name="password" value={password} onChange={this.handleChange} required/>
                </div>
                <button type="submit" class="btn btn-primary">Login</button>
            </form>
            <br></br>
            </div>
        )
    }
}

export default CustomerLogin;