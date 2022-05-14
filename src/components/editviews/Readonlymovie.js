import React from "react";

const Readonlymovie = ({ movielist, handleEditClick, handleMovieDelete}) => {

    return(
        <tr>
            <td>{movielist.name}</td>
            <td>{movielist.description}</td>
            <td>{movielist.theme}</td>
            <td>{movielist.director}</td>
            <td>{movielist.imdb}</td>
            <td>
                <button 
                    type="button" 
                    onClick={(event) => handleEditClick(event, movielist)}
                >
                Edit
                </button>
                <button
                    type="button"
                    onClick={() => handleMovieDelete(movielist._id)}
                >
                Delete
                </button>
            </td>
        </tr>
    );
}

export default Readonlymovie;