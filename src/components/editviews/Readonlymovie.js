import React from "react";

const Readonlymovie = ({ movielist, handleEditClick, handleMovieDelete}) => {

    return(
        <tr>
            <td>{movielist.name}</td>
            <td>{movielist.description}</td>
            <td>{movielist.theme}</td>
            <td style={{'width':'200px'}}>{movielist.director}</td>
            <td>{movielist.imdb}</td>
            <td>
                <img src={movielist.bannerurl} alt="banner" width="200px"></img>
            </td>
            <td style={{'marginTop': '40px'}}>
                <button 
                    type="button" 
                    class="btn btn-warning"
                    onClick={(event) => handleEditClick(event, movielist)}
                >
                Edit
                </button>
                <button
                    type="button"
                    class="btn btn-danger"
                    onClick={() => handleMovieDelete(movielist._id)}
                >
                Delete
                </button>
            </td>
        </tr>
    );
}

export default Readonlymovie;
