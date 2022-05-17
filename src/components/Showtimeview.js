import React, { useEffect, useState } from "react";
import {useLocation} from 'react-router-dom'
import { MDBCard, MDBCardBody , MDBCardTitle, MDBRow, MDBCol, MDBCardSubTitle} from 'mdb-react-ui-kit';

function Showtimeview(){

    //for passed moviename
    const location = useLocation()
    const { moviename } = location.state

    //viewing the movie showtimes
    const [showtimes, setShowtimes] = useState([]);

    useEffect(() => {
        console.log({moviename})
        fetch(`http://localhost:4000/movieshowtimes/${moviename}`)
            .then(resp => resp.json())
            .then(resp => {
                setShowtimes(resp)
            })
    })

    return(
        <div>
            <h1>{moviename} showtimes</h1>
            <MDBRow className="row-cols-1 row-cols-md-3 g-4">
                    {
                        showtimes.map((showtimelist) => (
                            <MDBCol>
                                <MDBCard className="h-100" key={showtimelist._id}>
                                    <MDBCardBody>
                                        <MDBCardTitle>{showtimelist.theater} Theater</MDBCardTitle>
                                        <MDBCardSubTitle>Date : {showtimelist.date}</MDBCardSubTitle>
                                        <MDBCardSubTitle>Showtime : {showtimelist.showtime}</MDBCardSubTitle>
                                        <MDBCardSubTitle>Ticket Price : {showtimelist.ticketprice}</MDBCardSubTitle>
                                        <label for="seat">Seat No : </label>
                                        <input type='text' className="form-control" name='seat'></input>
                                        <button type="submit">Book now</button>
                                    </MDBCardBody>
                                </MDBCard>
                            </MDBCol>
                        ))
                    }
            </MDBRow>
        </div>
    )
}

export default Showtimeview;