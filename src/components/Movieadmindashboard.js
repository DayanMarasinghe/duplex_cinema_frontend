import React, { Component } from "react";
import { Card, CardGroup, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import './Movieadmindashboard.css';
import addmovie from '../assets/addmovie.png';
import showtimes from '../assets/showtimes.png';
import viewmovie from '../assets/viewmovie.png';

class MovieadminDashboard extends Component{
    render(){
        return(
            <div style={{ 'display': 'flex', 'height':'10%' , 'padding':'10px'}}>
                <div class="card w-50">
                    <div class="bg-image hover-overlay ripple" data-mdb-ripple-color="light">
                        <img src={addmovie} class="img-fluid" />
                        <a href="#!">
                            <div class="mask" style={{ 'background-color': 'rgba(251, 251, 251, 0.15)' }}></div>
                        </a>
                    </div>
                    <div class="card-body">
                        <h5 class="card-title">Add movies</h5>
                        <p class="card-text">Add upcoming movie details</p>
                        <Button variant="warning"
                            as={Link}
                            to="/addmovie">
                            Add movies
                        </Button>
                    </div>
                </div>
                <div class="card w-50">
                    <div class="bg-image hover-overlay ripple" data-mdb-ripple-color="light">
                        <img src={viewmovie} class="img-fluid" />
                        <a href="#!">
                            <div class="mask" style={{ 'background-color': 'rgba(251, 251, 251, 0.15)' }}></div>
                        </a>
                    </div>
                    <div class="card-body">
                        <h5 class="card-title">Manage movies</h5>
                        <p class="card-text">Update or delete movie details</p>
                        <Button variant="warning"
                            as={Link}
                            to="/movieedit">
                            Manage movies
                        </Button>
                    </div>
                </div>
                <div class="card w-50">
                    <div class="bg-image hover-overlay ripple" data-mdb-ripple-color="light">
                        <img src={showtimes} class="img-fluid" />
                        <a href="#!">
                            <div class="mask" style={{ 'background-color': 'rgba(251, 251, 251, 0.15)' }}></div>
                        </a>
                    </div>
                    <div class="card-body">
                        <h5 class="card-title">Add showtimes</h5>
                        <p class="card-text">Add movie showtime details</p>
                        <Button variant="warning"
                            as={Link}
                            to="/addshowtime">
                            Add showtimes
                        </Button>
                    </div>
                </div>
            </div>
            
            
        );
    }


}

export default MovieadminDashboard;