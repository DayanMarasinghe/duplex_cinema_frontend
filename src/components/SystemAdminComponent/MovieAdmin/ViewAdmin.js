import { Component } from "react";
import "./ViewAdmin.css"
import { DataGrid } from '@mui/x-data-grid';
import axios from 'axios';

class ViewAdmin extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cartItems: []
    }
  }

  componentDidMount() {

    //const id = localStorage.getItem("UserID");

    axios.get(`http://localhost:4000/movieadmins/viewMovieAdmins`).then((res) => {
      console.log(res);
      this.setState({ cartItems: res.data.cartItems })
    }).catch(err => {
      console.log(err);
    })
  }


  render() {
    const { cartItems } = this.state;
    return (

      <div className="container">
        {cartItems.map(cartitem => (
          <div key={cartitem._id}>
            <h5>{cartitem.full_name}</h5>
            <h5>{cartitem.gender}</h5>
            <h5>{cartitem.address}</h5>
            <h5>{cartitem.nic}</h5>
            <h5>{cartitem.username}</h5>
            <h5>{cartitem.email}</h5>
            <h5>{cartitem.password}</h5>
            <h5>{cartitem.confirm_password}</h5>




          </div>

        ))}

      </div>
    )
  }


}

export default ViewAdmin