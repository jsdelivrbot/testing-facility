import React, { Component } from 'react';
import axios from 'axios';

import MoviePreview from './MoviePreview';

class Main extends Component {
    constructor(props) {
        super(props);

        this.state = this.initState();
    }

    // Initialization methods

    initState() {
        return {
            movies: []
        }
    }

    fetchAllMovies() {
        const config = {
            method: 'get',
            url: 'http://api.tvmaze.com/schedule/?country=US',
            headers: { 'Content-Type': 'application/json' }
        }

        axios(config)
            .then(({ data }) => this.setState({ movies: data }))
            .catch(error => console.log(error.response));
    }
    // Render methods

    displayMovies() {
        return (
            this.state.movies.map(movie => 
                <MoviePreview movie={movie} key={movie.id} />
            )
        )
    }

    // Lifecycle Methods
    componentDidMount() {
        this.fetchAllMovies();
    }

    render() {
        return (
            <main className='container'>
                <div className='row'>
                    {this.displayMovies()}
                </div>
            </main>
        );
    }
}

export default Main;