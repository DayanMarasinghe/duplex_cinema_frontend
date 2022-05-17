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
            .catch(error=>{
                alert("No showtimes for ", {moviename});
                window.location.href ='/movieview';
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
                                        <MDBCardTitle style={{'marginBottom':'10px'}}><b>{showtimelist.theater} Theater</b></MDBCardTitle>
                                        <MDBCardSubTitle style={{ 'marginBottom': '5px'}}>Date : {showtimelist.date}</MDBCardSubTitle>
                                        <MDBCardSubTitle style={{ 'marginBottom': '5px' }}>Showtime : {showtimelist.showtime}</MDBCardSubTitle>
                                        <MDBCardSubTitle style={{ 'marginBottom': '5px' }}>Ticket Price : {showtimelist.ticketprice}</MDBCardSubTitle>
                                        <label for="seat">Seat No : </label>
                                        <input style={{'marginBottom': '20px'}} type='text' className="form-control" name='seat'></input>
                                        <button style={{'marginLeft': '40%'}} className="btn btn-warning" type="submit">Book now</button>
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