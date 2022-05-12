import React from "react";

const Readonlymovie = ({ movielist, handleEditClick}) => {

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
            </td>
        </tr>
    );
}

export default Readonlymovie;