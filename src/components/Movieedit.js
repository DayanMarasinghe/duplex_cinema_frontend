import axios from "axios";
import React, {useEffect, useState, Fragment} from "react";
import Editablemovie from "./editviews/Editablemovie";
import Readonlymovie from "./editviews/Readonlymovie";

function Movieedit(){

    //state for viewing the movies
    const [movies , setMovies] = useState([])

    //state fot editing movies
    const [editMovieID, setEditMovieID] = useState(null);

    //state for keeping the currently editted data
    const [editMovieFormData, setEditMovieFormData] = useState({
        name: '',
        description: '',
        theme: '',
        director: '',
        imdb: '',
    });

    //fetch current movies 
    useEffect(() => {
        fetch('http://localhost:4000/movies')
            .then(resp => resp.json())
            .then(resp => {
                setMovies(resp)
            })
    }, [])

    //to show the edit row and save new data in state
    const handleEditClick = (event, movielist) => {
        event.preventDefault();
        setEditMovieID(movielist._id);

        const formValues = {
            name: movielist.name,
            description: movielist.description,
            theme: movielist.theme,
            director: movielist.director,
            imdb: movielist.imdb,
        };

        setEditMovieFormData(formValues)
    }

    //handling the editing of the row
    const handleEditMovieForm = (event) => {
        event.preventDefault();

        //get data from form
        const fieldName = event.target.getAttribute("name");
        const fieldValue = event.target.value;

        //set new data
        const newFormData = {...editMovieFormData};
        
        //update form with new data
        newFormData[fieldName] = fieldValue;

        setEditMovieFormData(newFormData);
    }

    //submit event of the updated movie
    const handleEditMovieSubmit = (event) => {
        event.preventDefault();

        const editedMovie = {
            id: editMovieID,
            name: editMovieFormData.name,
            description: editMovieFormData.description,
            theme: editMovieFormData.theme,
            director: editMovieFormData.director,
            imdb: editMovieFormData.imdb,
        }

        const moviePatch = {
            name: editMovieFormData.name,
            description: editMovieFormData.description,
            theme: editMovieFormData.theme,
            director: editMovieFormData.director,
            imdb: editMovieFormData.imdb
        }

        const newMovies = [...movies];

        //axios call on patch
        axios.patch(`http://localhost:4000/movies/${editMovieID}`, moviePatch)
            .then(response => {
                console.log(response);
                alert('Movie Updated successfully!');

                const index = movies.findIndex((movielist) => movielist._id === editMovieID);
                newMovies[index] = editedMovie;

                setMovies(newMovies);
                setEditMovieID(null);
            })
            .catch((error) =>{
                console.log("Error: ", error);
                alert('An error occured!')
            });
        
    }

    //update cancel event
    const handleUpdateCancel = () => {
        setEditMovieID(null);
    }

    return(
        <div>
            <h1 align="center">Movie information</h1>
            <form onSubmit={handleEditMovieSubmit}>
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
                                <Fragment>
                                    { editMovieID === movielist._id ? (
                                        <Editablemovie 
                                            editMovieFormData={editMovieFormData}
                                            handleEditMovieForm={handleEditMovieForm}
                                            handleUpdateCancel={handleUpdateCancel}
                                        />
                                    ) : (
                                        <Readonlymovie 
                                            movielist={movielist} 
                                            handleEditClick={handleEditClick}
                                        />
                                    )}
                                </Fragment>
                            ))
                        }
                    </tbody>
                </table>
            </form>
        </div> 
    );

}

export default Movieedit;