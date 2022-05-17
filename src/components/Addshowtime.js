import React, { Component } from "react";
import axios from "axios";

class Addshowtime extends Component{
    
    constructor(props){
        super(props)

        this.state = {
            moviename:'',
            theater:'',
            date:'',
            showtime:'',
            ticketprice:''
        }
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        axios.post('http://localhost:4000/movieshowtimes', this.state, {})
            .then(response => {
                console.log(response);
                alert('Movie showtime added successfully!');
                window.location.href = '/movieadmindashboard'
            })
            .catch(error => {
                console.error(error);
                alert('An error occured')
            })
    }

    render() {

        const { moviename, theater, date, showtime, ticketprice } = this.state;

        return (
            <div className="container" style={{ width: 850, borderBlockStyle: "solid", borderLeftStyle: "solid", borderRightStyle: "solid", marginTop: 10, borderBlockWidth: "thin", borderLeftWidth: "thin", borderRightWidth: "thin" }}>            
                <br></br>
                <h3 style={{ paddingLeft: 290 }}>Enter showtime details</h3>
                <form onSubmit={this.handleSubmit}>
                    <div className="form-group">
                        <label for="moviename">Movie name: </label>
                        <input type="text" className="form-control" name="moviename" value={moviename} onChange={this.handleChange} required></input>
                    </div>
                    <div className="form-group">
                        <label for="theater">Theater: </label>
                        <input type="text" className="form-control" name="theater" value={theater} onChange={this.handleChange} required></input>
                    </div>
                    <div className="form-group">
                        <label for="date">Date: </label>
                        <input type="date" className="form-control" name="date" value={date} onChange={this.handleChange} required></input>
                    </div>
                    <div className="form-group">
                        <label for="showtime">Showtime: </label>
                        <input type="time" className="form-control" name="showtime" value={showtime} onChange={this.handleChange} required></input>
                    </div>
                    <div className="form-group" style={{ 'marginBottom': '20px' }}>
                        <label for="ticketprice">Ticket Price: </label>
                        <input type="number" className="form-control" name="ticketprice" value={ticketprice} onChange={this.handleChange} required></input>
                    </div>
                    <button type="submit" class="btn btn-warning">Add Showtime</button>
                </form>
                <br></br>
            </div>
        );
    }
}

export default Addshowtime;