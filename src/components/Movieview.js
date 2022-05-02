import axios from "axios";
import React, {Component} from "react";

class Movieview extends Component{

    constructor(props){
        super(props);
        this.state = {
            movies:[],
            DataisLoaded: false
        };
    }

    componentDidMount(){
        fetch('http://localhost:4000/movies')
        .then((res) => res.json())
        .then((json) => {
            this.setState({
                movies: json,
                DataisLoaded: true
            });
        })
    }

    render(){
        const {DataisLoaded, movies} = this.state;

        if(!DataisLoaded) return <div>
        <h1>Please wait.................</h1></div>;

        return(
            <div className="App">
                <h1>Fetch data from an API</h1> {
                    movies.map((movielist) => (
                        <ol key={movielist._id}>
                            Moviename : {movielist.name},
                            Description : {movielist.description},
                            Theme: {movielist.theme},
                            Director: {movielist.director},
                            {movielist.actors.map((actorslist) => (
                                <p>Name: {actorslist.name}<br></br>Role: {actorslist.role}</p>
                            ))}
                            IMDB: {movielist.imdb}
                        </ol>
                    ))
                }
            </div>
        );
    }

}

export default Movieview