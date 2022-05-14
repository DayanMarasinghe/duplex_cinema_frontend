import React, { useEffect, useState } from "react";
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
            <table>
                <thead>
                    <tr>
                        <th>Moviename </th>
                        <th>Description </th>
                        <th>Theme</th>
                        <th>Director</th>
                        <th>IMDB</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        movies.map((movielist) => (
                            <tr>
                                <td>{movielist.name}</td>
                                <td>{movielist.description}</td>
                                <td>{movielist.theme}</td>
                                <td>{movielist.director}</td>
                                <td>{movielist.imdb}</td>
                                <td>
                                    <Link 
                                        className="btn btn-primary"
                                        to='/showtimes'
                                        state={{moviename: movielist.name}}
                                    >
                                    View showtimes
                                    </Link>
                                </td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </div>
    )

}

export default Movieview;