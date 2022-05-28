import Header from "../Header/Header";
import React, { useEffect, useState } from "react";
import { Button, Container, Card, Badge, Accordion } from "react-bootstrap";
import axios from "axios";
import { MDBCardImage } from "mdb-react-ui-kit";

function DisplayMovies() {
  //state for viewing the movies
  const [movies, setMovies] = useState([]);

  //fetch current movies
  useEffect(() => {
    fetch("http://localhost:4000/movies")
      .then((resp) => resp.json())
      .then((resp) => {
        setMovies(resp);
      });
  }, []);

  //movie delete event
  const handleMovieDelete = (movieId) => {
    const newMovies = [...movies];

    //axios call to delete the movie
    axios
      .delete(`http://localhost:4000/movies/${movieId}`)
      .then((response) => {
        console.log(response);
        alert("Movie deleted!");

        //get the index of the given movie
        const index = movies.findIndex(
          (movielist) => movielist._id === movieId
        );

        //pass the index and how many elements to be deleted
        newMovies.splice(index, 1);

        setMovies(newMovies);
      })
      .catch((error) => {
        console.error(error);
        alert("An error occured");
      });
  };
  return (
    <div>
      <Header />
      <Container style={{ width: 900 }}>
        {movies.map((details) => (
          <Accordion defaultActiveKey={["0"]}>
            <Accordion.Item eventkey="0">
              <Card style={{ margin: 10 }}>
                <Card.Header
                  style={{ display: "flex", backgroundColor: "lightgrey" }}
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
                      {details.name}
                    </Accordion.Button>
                  </span>
                </Card.Header>
                <Accordion.Collapse>
                  <Card.Body>
                    <h4>
                      <Badge bg="success" text="light">
                        Category - {details.theme}{" "}
                      </Badge>
                    </h4>

                    <blockquote className="blockquote mb-0">
                      <p>{details.director}</p>
                      <p style={{ fontSize: 16 }}>{details.description}</p>
                      <p style={{ fontSize: 16 }}>{details.description}</p>

                      <MDBCardImage
                        src={details.bannerurl}
                        position="top"
                      ></MDBCardImage>
                    </blockquote>
                    <Button
                      variant="danger"
                      className="mx-2"
                      onClick={handleMovieDelete}
                    >
                      Delete
                    </Button>
                  </Card.Body>
                </Accordion.Collapse>
              </Card>
            </Accordion.Item>
          </Accordion>
        ))}
      </Container>
    </div>
  );
};

export default DisplayMovies;
