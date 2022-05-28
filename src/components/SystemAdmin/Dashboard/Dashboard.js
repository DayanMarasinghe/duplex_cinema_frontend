import React from "react";
import {
  Button,
  Container,
  Card,
  ListGroupItem,
  ListGroup,
} from "react-bootstrap";

//import '../bootstrap.min.css'
import Header from "../Header/Header";

function Dashboard() {
  return (
    <div>
      <Header />
      <div>
        <div className="container" style={{display : "flex"}}>
          <div>
            <Card style={{ width: "18rem", marginLeft: 90, marginBottom: 70 }}>
              <Card.Img
                variant="top"
                src="https://i.pinimg.com/originals/12/32/b8/1232b871ccb871a143ef8ecd2c789635.jpg"
              />
              <Card.Body></Card.Body>
            </Card>
          </div>
          <div>
            <Card style={{ width: "30rem" }}>
              <Card.Body>
                <Card.Title>Peter Parker</Card.Title>
                <Card.Text>
                 PeterParker@gmail.com
                </Card.Text>
                <Card.Text>
                 System Admin
                </Card.Text>
                <Card.Text>
                  Nayagara Falls, Ontario, Canada
                </Card.Text>
              </Card.Body>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
