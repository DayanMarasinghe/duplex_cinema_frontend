import axios from "axios";
import React, { Component } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { MDBCard, MDBCardBody , MDBCardTitle, MDBRow, MDBCol, MDBCardSubTitle} from 'mdb-react-ui-kit';

class Cart extends Component{

    constructor(props)
    {
        super(props)
    
        this.state={
            // _id:'',
            userID:'',
            moviename:'',
            theatre:'',
            seat:'',
            price:'',
            date:'',
            time:''
        }
    }

    componentDidMount(){

        const id = localStorage.getItem("userid");

        fetch(`http://localhost:4000/carts/getcart/${id}`)
        .then((res) => res.json())
        .then((json) => {
            this.setState({
                carts: json,
                DataisLoaded: true
            });
        })
    }
    
    handleRemove =(id) =>{
        // alert(id);
        axios.delete(`http://localhost:4000/carts/deleteitem/${id}`,{
        })
        .then(response =>{

            console.log(response)
        })
    }

     refreshPage() {
        window.location.reload(false);
      }

    render(){
        const {DataisLoaded, carts} = this.state;

        if(!DataisLoaded) return <div>
        <h1>Please wait.................</h1></div>;

        return(
            <div className="App">
                <h1>Your Cart</h1> 

                <MDBRow className="row-cols-1 row-cols-md-3 g-4">
                    {
                        carts.map((cart) => (
                            <MDBCol>
                                <MDBCard className="h-100" key={cart._id}>
                                    <MDBCardBody>
                                        <MDBCardTitle>{cart.moviename}</MDBCardTitle>
                                        <MDBCardSubTitle>Theatre : {cart.theatre}</MDBCardSubTitle>
                                        <MDBCardSubTitle>Seat No: {cart.seat}</MDBCardSubTitle>
                                        <MDBCardSubTitle>Ticket Price : {cart.price}</MDBCardSubTitle>
                                        <MDBCardSubTitle>Time : {cart.date}</MDBCardSubTitle>
                                        <MDBCardSubTitle>Date : {cart.time}</MDBCardSubTitle>
                                        <br></br>
                                        <button class="btn btn-danger" onClick={()=>{this.handleRemove(cart._id);this.refreshPage()}}>Remove</button>
                                    </MDBCardBody>
                                </MDBCard>
                            </MDBCol>
                            ))
                    }
            </MDBRow>
            <br></br>
            <button class="btn btn-warning">Checkout</button>

            </div>
        );
    }
}


export default Cart;