import React, { Component } from "react";
import './SystemAdminDashboard.css'
import Topbar from "./Topbar/Topbar";
import Sidebar from "./Sidebar/Sidebar";
import axios from 'axios';
import { Table } from "react-bootstrap";

class SystemAdminDashboard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            setAdmin: []
        }
    }

    componentDidMount() {
        axios.get(`http://localhost:4000/systemadmins/movies`).then((res) => {
            console.log(res);
            this.setState({ setAdmin: res.data })
        }).catch(err => {
            console.log(err);
        })
    }

    render() {
        const { setAdmin } = this.state;
        return (
            <div>
                <Topbar />
                <div className="containers ">
                    <Sidebar />
                    <div className="others">
                        <div className="container">
                            <Table style={{backgroundColor: "white", marginTop: 20, marginRight: 50}} striped bordered hover>
                                <thead>
                                    <tr>
                                        <th>Movie</th>
                                        <th>Theme</th>
                                        <th>Director</th>
                                        <th>IMDB</th> 
                                    </tr>
                                </thead>
                                <tbody>
                                    {setAdmin.map(admins => (
                                        <tr>
                                            <td>{admins.name}</td>
                                            <td>{admins.theme}</td>
                                            <td>{admins.director}</td>
                                            <td>{admins.imdb}</td>
                                            
                                        </tr>
                                    ))}
                                </tbody>
                            </Table>                           
                        </div>

                    </div>
                </div>

            </div>
        );
    }
}

export default SystemAdminDashboard
