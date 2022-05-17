import React, { useEffect, useState } from "react";
import { MDBCard, MDBCardImage, MDBCardBody, MDBCardTitle, MDBCardText, MDBRow, MDBCol, MDBCardSubTitle } from 'mdb-react-ui-kit';
import { Link } from "react-router-dom";

function Movieview(){

    const [movies, setMovies] = useState([]);


    useEffect(() => {
        fetch('http://localhost:4000/movies')
            .then(resp => resp.json())
            .then(resp => {
                setMovies(resp)
            })
    }, [])

    return(
        <div>
            <h1>Now showing..</h1>
            <MDBRow className='row-cols-1 row-cols-md-3 g-4'>
                {
                    movies.map((movielist) => (
                        <MDBCol>
                            <MDBCard className='h-100' key={movielist._id}>
                                <MDBCardImage
                                    src={movielist.bannerurl}
                                    position="top"
                                ></MDBCardImage>
                                <MDBCardBody>
                                    <MDBCardTitle>{movielist.name}</MDBCardTitle>
                                    <MDBCardText>{movielist.description}</MDBCardText>
                                    <MDBCardSubTitle>Theme : {movielist.theme}</MDBCardSubTitle>
                                    <MDBCardSubTitle>Movie by : {movielist.director}</MDBCardSubTitle>
                                    <MDBCardSubTitle>IMDB : {movielist.imdb}/10</MDBCardSubTitle>
                                    <Link
                                        className="btn btn-primary"
                                        to='/showtimes'
                                        state={{ moviename: movielist.name }}
                                    >
                                        View showtimes
                                    </Link>
                                </MDBCardBody>
                            </MDBCard>
                        </MDBCol>
                    ))
                }
            </MDBRow>
        </div>
    )

}

export default Movieview;
