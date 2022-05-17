import { Component } from "react";
import "./ViewAdmin.css"
import { DataGrid } from '@mui/x-data-grid';
import axios from 'axios';
import { Table } from "react-bootstrap";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import Topbar from "../Topbar/Topbar";
import Sidebar from "../Sidebar/Sidebar";


class ViewAdmin extends Component {
  constructor(props) {
    super(props);
    this.state = {
      setAdmin: []
    }
  }

  componentDidMount() {

    //const id = localStorage.getItem("UserID");

    axios.get(`http://localhost:4000/movieadmins/viewMovieAdmins`).then((res) => {
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
        <div className="containers">
          <Sidebar />
          <div className="others">
            <div className="containers">
            <Table style={{backgroundColor: "white", marginTop: 20, marginLeft: 20}} striped bordered hover>
            <thead>
              <tr>
                <th>First Name</th>

                <th>Address</th>
                <th>nic</th>
                <th>username</th>
                <th>email</th>
              </tr>
            </thead>
            <tbody>
              {setAdmin.map(admins => (
                <tr>
                  <td>{admins.full_name}</td>

                  <td>{admins.address}</td>
                  <td>{admins.nic}</td>
                  <td>{admins.username}</td>
                  <td>{admins.email}</td>
                </tr>

              ))}


            </tbody>

            <div className="">
              <Button variant="warning"
                as={Link}
                to="/newuser">
                Register

              </Button>
            </div>

          </Table>


            </div>
          </div>
         



        </div>
      </div>

    )
  }


}

export default ViewAdmin


