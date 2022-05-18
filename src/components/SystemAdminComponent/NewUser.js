import "./newUser.css";
import React from "react";
import axios from "axios";
import { Component } from "react";
import Topbar from "./Topbar/Topbar";
import Sidebar from "./Sidebar/Sidebar";
import { ToastContainer, toast, Toast } from "react-toastify";
//import 'react-toastify/dist/react-toastify.css'
import { ReactNotifications } from 'react-notifications-component'
import { Store } from 'react-notifications-component'
//import "animate.css"
import 'react-notifications-component/dist/theme.css'




class NewUser extends Component {


    constructor(props) {
        super(props)

        this.state = {
            full_name: '',
            address: '',
            nic: '',
            username: '',
            email: '',
            password: ''
        }
    }

    getNotified = () => {
        Store.addNotification({
            title: "success",
            message: "addes",
            type: "success",
            container: "top-right",
            insert: "top",

        })
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault()
        axios.post('http://localhost:4000/movieadmins/addMovieAdmin', this.state, {

        })
            .then(response => {
                console.log(response)
            })
    }

    // clearAll = () => {
    //     document.getElementById("regForm").reset();
    // }

    render() {
        const { full_name, address, nic, username, email, password } = this.state

        return (

            <div>
                <Topbar />

                <div className="containers">
                    <Sidebar />
                    <div className="others">
                        <div className="container" >
                            {/* <form id="regForm" onSubmit={this.handleSubmit}>
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
                        <input type='text' class="form-control" name='email' value={email} onChange={this.handleChange} required></input>
                    </div>
                    <div class="form-group">
                        <label for="phone">Phone</label>
                        <input type='text' class="form-control" name='phone' value={phone} onChange={this.handleChange} required></input>
                    </div>
                    <br></br>
                    <button type="submit" class="btn btn-primary" style={{ width: 250 }}>Submit</button>
                    <button type="submit" class="btn btn-danger" style={{ width: 200 }} onClick={() => this.clearAll()}>Clear All</button>
                </form> */}
                            <br></br>

                            <div className="newUser" style={{ marginTop: 20, marginLeft: 20 }}>
                                <h1 className="newUserTitle">New User</h1>
                                <form className="newUserForm" id="regForm" onSubmit={this.handleSubmit}>
                                    <div className="newUserItem">
                                        <label>Full Name</label>
                                        <input type="text" placeholder="john Smith" name='full_name' value={full_name} onChange={this.handleChange} />
                                    </div>
                                    <div className="newUserItem">
                                        <label>Address</label>
                                        <input type="text" placeholder="New York | USA" name='address' value={address} onChange={this.handleChange} />
                                    </div>
                                    <div className="newUserItem">
                                        <label>NIC</label>
                                        <input type="text" placeholder="john@gmail.com" name='nic' value={nic} onChange={this.handleChange} />
                                    </div>
                                    <div className="newUserItem">
                                        <label>Username</label>
                                        <input type="text" placeholder="john" name='username' value={username} onChange={this.handleChange} />
                                    </div>
                                    <div className="newUserItem">
                                        <label>Email</label>
                                        <input type="email" placeholder="john@gmail.com" name='email' value={email} onChange={this.handleChange} />
                                    </div>
                                    <div className="newUserItem">
                                        <label>Password</label>
                                        <input type="password" placeholder="password" name='password' value={password} onChange={this.handleChange} />
                                    </div>
                                    <br></br>

                                
                                    {/* <button type="submit" class="btn btn-primary" style={{ width: 250 }}>Submit</button>
                    <button type="submit" class="btn btn-danger" style={{ width: 200 }} onClick={() => this.clearAll()}>Clear All</button> */}
                                </form>
                                <ReactNotifications />
                    
                                <div className="buttons">
                                        <button className="newUserButton"  variant="warning" type="submit">Create</button>
                                        
                                        <button id="clearbtn" className="newUserButton" type="submit" onClick={() => this.getNotified()}>Clear

                                        </button>
                                    </div>

                            </div>
                        </div>

                    </div>
                </div>

            </div>

        )
    }
}


export default NewUser;