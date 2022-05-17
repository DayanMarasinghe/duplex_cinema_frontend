import React, {Component} from "react";
import { Card, CardGroup, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import movieadmin from '../assets/movieadmin.png';
import sysadmin from '../assets/sysadmin.png';

class Adminpivot extends Component{

    //here when user logs in the user should be validated

    render(){
        return(
            <div style={{ 'display': 'flex', 'paddingLeft': '25%' }}>
                <div class="card" style={{ 'width': '30%' }}>
                    <div class="bg-image hover-overlay ripple" data-mdb-ripple-color="light">
                        <img src={sysadmin} class="img-fluid" />
                        <a href="#!">
                            <div class="mask" style={{ 'background-color': 'rgba(251, 251, 251, 0.15)' }}></div>
                        </a>
                    </div>
                    <div class="card-body">
                        <h5 class="card-title" style={{'paddingTop' : '7%'}}>System Admins</h5>
                        <p class="card-text">Login as System admin</p>
                        <Button variant="warning"
                            as={Link}
                            to="/#">
                            Log In
                        </Button>
                    </div>
                </div>
                <div class="card" style={{'width':'30%'}}>
                    <div class="bg-image hover-overlay ripple" data-mdb-ripple-color="light">
                        <img src={movieadmin} class="img-fluid" style={{'height':'90%', 'width': '100%'}} />
                        <a href="#!">
                            <div class="mask" style={{'background-color': 'rgba(251, 251, 251, 0.15)'}}></div>
                        </a>
                    </div>
                    <div class="card-body">
                        <h5 class="card-title">Movie Admins</h5>
                        <p class="card-text">Login as Movie admin</p>
                        <Button variant="warning"
                            as={Link}
                            to="/madminlogin">
                            Log In
                        </Button>
                    </div>
                </div>
            </div>
        );
    }

}

export default Adminpivot;