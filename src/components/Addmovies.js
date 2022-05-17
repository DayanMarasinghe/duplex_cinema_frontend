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
            imdb:'',
            bannerurl:'',
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
            window.location.href = '/movieedit'
        })
        .catch(error => {
            console.error(error);
            alert('An error occured')
        })
    }

    render(){
        const { name, description, theme, director, imdb, bannerurl} = this.state;

        return(
            <div className="container" style={{ width: 850, borderBlockStyle: "solid", borderLeftStyle: "solid", borderRightStyle: "solid", marginTop: 10, borderBlockWidth: "thin", borderLeftWidth: "thin", borderRightWidth: "thin" }}>
                <br></br>
                <h3 style={{ paddingLeft: 290 }}>Enter movie details</h3>
                <form onSubmit={this.handleSubmit}>
                    <div class="form-group">
                        <label for="name">Movie Name: </label>
                        <input type='text' className="form-control" name='name' value={name} onChange={this.handleChange} required></input>
                    </div>
                    <div class="form-group">
                        <label for="description">Description: </label>
                        <textarea className="from-control" rows="5" cols="89" name="description" value={description} onChange={this.handleChange} required></textarea>
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
                        <label for="imdb">IMDB rating: </label>
                        <input type='text' className="form-control" name='imdb' value={imdb} onChange={this.handleChange} required></input>
                    </div>
                    <div class="form-group" style={{ 'marginBottom': '20px' }}>
                        <label for="bannerurl">Banner URL: </label>
                        <input type='text' className="form-control" name='bannerurl' value={bannerurl} onChange={this.handleChange} required></input>
                    </div>
                    <button type="submit" class="btn btn-warning">Add Movie</button>
                </form>
                <br></br>
            </div>
        );
    }
}

export default Addmovie;