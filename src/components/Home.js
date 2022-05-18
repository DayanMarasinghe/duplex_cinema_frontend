import React, {Component} from "react";
import { MDBCard, MDBCardImage, MDBCardBody, MDBCardTitle, MDBCardText, MDBRow, MDBCol, MDBCardSubTitle } from 'mdb-react-ui-kit';
import { Link } from "react-router-dom";
import {Button, Spinner} from 'react-bootstrap';

class Home extends Component{

    constructor(props){
        super(props);
        this.state = {
            movies:[],
            DataisLoaded: false
        };
    }

    componentDidMount(){
        fetch('http://localhost:4000/movies')
        .then((res) => res.json())
        .then((json) => {
            this.setState({
                movies: json,
                DataisLoaded: true
            });
        })
    }

    render(){
        const {DataisLoaded, movies} = this.state;

        if(!DataisLoaded) return 
        <div>
            <Spinner animation="grow" variant="dark" />
        </div>;

        return(
            <div className="App">
                <h1>Now showing</h1>
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
                                            <MDBCardTitle style={{ 'marginBottom': '12px' }}><b>{movielist.name}</b></MDBCardTitle>
                                            <MDBCardText style={{ 'marginBottom': '8px' }}>{movielist.description}</MDBCardText>
                                            <MDBCardSubTitle style={{ 'marginBottom': '8px' }}>Theme : {movielist.theme}</MDBCardSubTitle>
                                            <MDBCardSubTitle style={{ 'marginBottom': '8px' }}>Movie by : {movielist.director}</MDBCardSubTitle>
                                            <MDBCardSubTitle style={{ 'marginBottom': '20px' }}>IMDB : {movielist.imdb}/10</MDBCardSubTitle>
                                            <Button variant="warning"
                                                as={Link}
                                                to="/userlogin">
                                                Showtimes
                                            </Button>
                                        </MDBCardBody>
                                    </MDBCard>
                                </MDBCol>
                                
                            ))
                        }
                </MDBRow>
                    

            </div>
        );
    }

}


export default Home;