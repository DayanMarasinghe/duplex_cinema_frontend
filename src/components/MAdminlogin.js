import React, { Component } from "react";
import axios from 'axios';

class MAdminlogin extends Component {

    constructor(props) {
        super(props)

        this.state = {
            email: '',
            password: '',
        }
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault()
        axios.post('http://localhost:4000/movieadmins/signin', this.state, {})
            .then(response => {
                console.log(response)
                alert('Logged in')
                window.location.href ='/movieadmindashboard'
            })
            .catch(error => {
                console.error(error);
                alert('Incorrect credentials')
            })
    }

    render(){
        const {email, password} = this.state;

        return(
            <div className="container" style={{ width: 500 , borderBlockStyle: "solid", borderLeftStyle: "solid", borderRightStyle:"solid" , marginTop: 10, borderBlockWidth: "thin", borderLeftWidth:"thin", borderRightWidth:"thin"}}>
                <br></br>
                <h3 style={{paddingLeft: 65}}>Please enter your credentials</h3>
                <form onSubmit={this.handleSubmit}>
                    <div class="form-group">
                        <label for="email">Email: </label>
                        <input type='text' className="form-control" name='email' value={email} onChange={this.handleChange} required></input>
                    </div>
                    <div class="form-group" style={{ 'marginBottom': '20px' }}>
                        <label for="password">Password: </label>
                        <input type='password' className="form-control" name='password' value={password} onChange={this.handleChange} required></input>
                    </div>
                    <button type="submit" class="btn btn-warning">Log In</button>
                </form>
                <br></br>
            </div>
        )
    }
}

export default MAdminlogin;