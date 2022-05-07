import axios from "axios";
import React, { Component } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

class CustomerLogin extends Component{

    render(){

        return(
            <div className="container">
            <form>
                <div class="mb-3">
                    <label for="username" class="form-label">UserName</label>
                    <input type="email" class="form-control" id="username" aria-describedby="emailHelp"/>
                </div>
                <div class="mb-3">
                    <label for="password" class="form-label">Password</label>
                    <input type="password" class="form-control" id="password"/>
                </div>
                <button type="submit" class="btn btn-primary">Login</button>
            </form>
            </div>
        )
    }
}

export default CustomerLogin;