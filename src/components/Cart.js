import axios from "axios";
import React, { Component } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

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
        // fetch(`http://localhost:4000/carts/getcart/${this.state.userID}`)
        fetch('http://localhost:4000/carts/getcart/25')
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
                <h1>Your Cart</h1> {
                    carts.map((cart) => (
                        <ul key={cart._id}>
                            {/* userID : {cart.userID}, */}
                            moviename : {cart.moviename},
                            theatre: {cart.theatre},
                            seat: {cart.seat},
                            price: {cart.price},
                            date: {cart.date},
                            time: {cart.time}
                            <button class="btn btn-danger" onClick={()=>{this.handleRemove(cart._id);this.refreshPage()}}>Remove</button>
                        </ul>
                    ))
 
                }
                <button class="btn btn-warning">Checkout</button>
            </div>
        );
    }
}


export default Cart;