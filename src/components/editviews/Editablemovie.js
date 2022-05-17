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
            <td style={{ 'width': '200px' }}>
                <input
                    type="text"
                    name="description"
                    placeholder="Change description"
                    required="required"
                    value={editMovieFormData.description}
                    onChange={handleEditMovieForm}
                ></input>
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
                <input
                    type="text"
                    name="bannerurl"
                    placeholder="Enter banner URL"
                    required="required"
                    value={editMovieFormData.bannerurl}
                    onChange={handleEditMovieForm}
                ></input>
            </td>
            <td style={{'marginTop':'40px'}}>
                <button class="btn btn-warning" type="submit">Confirm</button>
                <button class="btn btn-danger" type="button" onClick={handleUpdateCancel}>Cancel</button>
            </td>
        </tr>
    )
}

export default Editablemovie;