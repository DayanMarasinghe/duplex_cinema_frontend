import React, { Component } from "react";
import { Card, CardGroup } from "react-bootstrap";
import { Link } from "react-router-dom";
import './Movieadmindashboard.css';

class MovieadminDashboard extends Component{
    render(){
        return(
            <div>
                <CardGroup>
                    <Card class="card" style={{ width: '18rem'}}>
                        <Card.Body>
                            <Card.Title>Add movies</Card.Title>
                            <Card.Text>
                                Add new movies..
                            </Card.Text>
                            <Card.Link as={Link} to="/addmovie">Add movies</Card.Link>
                        </Card.Body>
                    </Card>
                    <Card style={{ width: '18rem' }}>
                        <Card.Body>
                            <Card.Title>View movies</Card.Title>
                            <Card.Text>
                                View current movies
                            </Card.Text>
                            <Card.Link href="#">View movies</Card.Link>
                        </Card.Body>
                    </Card>
                    <Card style={{ width: '18rem' }}>
                        <Card.Body>
                            <Card.Title>Add movie showtimes</Card.Title>
                            <Card.Text>
                                Add showtimes
                            </Card.Text>
                            <Card.Link as={Link} to="/addshowtime">Add showtimes</Card.Link>
                        </Card.Body>
                    </Card>
                </CardGroup>
                
            </div>
        );
    }


}

export default MovieadminDashboard;