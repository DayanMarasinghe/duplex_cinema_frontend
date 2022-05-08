import React, { Component } from "react";
import axios from "axios";

class Addmovie extends Component{

    constructor(props){
        super(props)

        this.state={
            name:'',
            description:'',
            theme:'',
            director:'',
            imdb:''
        }
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault()
        axios.post('http://localhost:4000/movies', this.state, {})
        .then(response => {
            console.log(response);
            alert('Movie added successfully!');
        })
        .catch(error => {
            console.error(error);
            alert('An error occured')
        })
    }

    render(){
        const {name, description, theme, director, imdb} = this.state;

        return(
            <div className="container">
                <form onSubmit={this.handleSubmit}>
                    <div class="form-group">
                        <label for="name">Movie Name: </label>
                        <input type='text' className="form-control" name='name' value={name} onChange={this.handleChange} required></input>
                    </div>
                    <div class="form-group">
                        <label for="description">Description: </label>
                        <textarea className="from-control" rows="5" cols="144" name="description" value={description} onChange={this.handleChange} required></textarea>
                    </div>
                    <div class="form-group">
                        <label for="theme">Movie theme: </label>
                        <input type='text' className="form-control" name='theme' value={theme} onChange={this.handleChange} required></input>
                    </div>
                    <div class="form-group">
                        <label for="director">Director: </label>
                        <input type='text' className="form-control" name='director' value={director} onChange={this.handleChange} required></input>
                    </div>
                    <div class="form-group">
                        <label for="director">IMDB rating: </label>
                        <input type='text' className="form-control" name='imdb' value={imdb} onChange={this.handleChange} required></input>
                    </div>
                    <button type="submit" class="btn btn-primary">Add Movie</button>
                </form>
            </div>
        );
    }
}

export default Addmovie;