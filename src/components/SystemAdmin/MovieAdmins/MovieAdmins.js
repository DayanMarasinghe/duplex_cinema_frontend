import React, { useEffect, useState } from "react";
import { Button, Container, Card, Accordion } from "react-bootstrap";
import { Link } from "react-router-dom";
import axios from "axios";
import Header from "../Header/Header";

function MovieAdmins({ search }) {
  const [admindetails, setAdminDetails] = useState([]);

  const fetchadminDetails = async () => {
    const { data } = await axios.get(
      "http://localhost:4000/movieadmins/viewMovieAdmins"
    );
    setAdminDetails(data);
  };

  console.log(admindetails);

  useEffect(() => {
    fetchadminDetails();
  }, []);

  const onDelete = (id) => {
    axios.delete(`http://localhost:4000/movieadmins/${id}`).then((res) => {
      alert("deleted successfully");
    });
  };

  

  return (
    <div>
      <Header />
      <Container style={{ width: 900 }}>
        <Link to="/adminregister">
          <Button
            variant="warning"
            style={{ marginLeft: 10, marginBottom: 6, marginTop: 20 }}
            size="sm"
          >
            Add New Admin
          </Button>
        </Link>
        {admindetails.map((details) => (
          <Accordion defaultActiveKey={["0"]}>
            <Accordion.Item eventkey="0">
              <Card style={{ margin: 10 }}>
                <Card.Header
                  style={{ display: "flex", backgroundColor: "white" }}
                >
                  <span
                    style={{
                      color: "black",
                      textDecoration: "none",
                      flex: 1,
                      cursor: "pointer",
                      alignSelf: "center",
                      fontSize: 18,
                    }}
                  >
                    <Accordion.Button as={Card.Text} variant="link">
                      {details.full_name}
                    </Accordion.Button>
                  </span>
                  <div>
                    <Button variant="warning" href={`/updateadmin/${details._id}`}>
                      Edit
                    </Button>
                    <Button
                      variant="danger"
                      className="mx-2"
                      onClick={() => onDelete(details._id)}
                    >
                      Delete
                    </Button>
                  </div>
                </Card.Header>
                <Accordion.Collapse>
                  <Card.Body>
                    <p>Email - {details.email} </p>

                    <blockquote className="blockquote mb-0">
                      <p style={{ fontSize: 16 }}>{details.address}</p>
                      <p style={{ fontSize: 16 }}>{details.username}</p>
                    </blockquote>
                  </Card.Body>
                </Accordion.Collapse>
              </Card>
            </Accordion.Item>
          </Accordion>
        ))}
      </Container>
    </div>
  );
}

export default MovieAdmins;
