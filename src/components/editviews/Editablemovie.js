import React from "react";

const Editablemovie = ({ editMovieFormData, handleEditMovieForm, handleUpdateCancel}) => {

    return(
        <tr>
            <td>
                <input
                    type="text"
                    required="required"
                    placeholder="Enter movie name"
                    name="name"
                    value={editMovieFormData.name}
                    onChange={handleEditMovieForm}
                ></input>
            </td>
            <td>
                <textarea
                    required="required"
                    name="description"
                    placeholder="Change description"
                    rows="1"
                    cols="10"
                    value={editMovieFormData.description}
                    onChange={handleEditMovieForm}
                ></textarea>
            </td>
            <td>
                <input
                    type="text"
                    name="theme"
                    placeholder="Enter theme"
                    required="required"
                    value={editMovieFormData.theme}
                    onChange={handleEditMovieForm}
                ></input>
            </td>
            <td>
                <input
                    type="text"
                    name="director"
                    placeholder="Enter director name"
                    required="required"
                    value={editMovieFormData.director}
                    onChange={handleEditMovieForm}
                ></input>
            </td>
            <td>
                <input
                    type="text"
                    name="imdb"
                    placeholder="Enter movie rating"
                    required="required"
                    value={editMovieFormData.imdb}
                    onChange={handleEditMovieForm}
                ></input>
            </td>
            <td>
                <button type="submit">Update</button>
                <button type="button" onClick={handleUpdateCancel}>Cancel</button>
            </td>
        </tr>
    )
}

export default Editablemovie;