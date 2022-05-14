import React, { useEffect, useState } from "react";
import {useLocation} from 'react-router-dom'

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
            <table>
                <thead>
                    <tr>
                        <td>Theater</td>
                        <td>Date</td>
                        <td>Showtime</td>
                        <td>Price</td>
                        <td>Seat no</td>
                        <td>Book now</td>
                    </tr>
                </thead>
                <tbody>
                    {
                        showtimes.map((showtimelist) => (
                            <tr>
                                <td>{showtimelist.theater}</td>
                                <td>{showtimelist.date}</td>
                                <td>{showtimelist.showtime}</td>
                                <td>{showtimelist.ticketprice}</td>
                                <td>
                                    <input type='text' className="form-control" name='seat'></input>
                                </td>
                                <td>
                                    <button type="submit">Book now</button>
                                </td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </div>
    )
}

export default Showtimeview;