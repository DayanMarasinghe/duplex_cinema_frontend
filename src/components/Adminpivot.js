import React, {Component} from "react";
import { Card, CardGroup } from "react-bootstrap";
import { Link } from "react-router-dom";

class Adminpivot extends Component{

    //here when user logs in the user should be validated

    render(){
        return(
            <div>
                <CardGroup>
                    <Card class="card" style={{ width: '18rem' }}>
                        <Card.Body>
                            <Card.Title>System Admins</Card.Title>
                            <Card.Text>
                                Login as System admin
                            </Card.Text>
                            <Card.Link as={Link} to="/#">Login</Card.Link>
                        </Card.Body>
                    </Card>
                    <Card class="card" style={{ width: '18rem' }}>
                        <Card.Body>
                            <Card.Title>Movie Admins</Card.Title>
                            <Card.Text>
                                Login as Movie admin
                            </Card.Text>
                            <Card.Link as={Link} to="/movieadmindashboard">Login</Card.Link>
                        </Card.Body>
                    </Card>
                </CardGroup>
            </div>
        );
    }

}

export default Adminpivot;