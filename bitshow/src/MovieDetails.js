import React, { Component } from 'react';
import axios from 'axios';

import './MovieDetails.css';

class MovieDetails extends Component {
    constructor(props) {
        super(props);

        this.state = {
            movie: {
                image: {
                    original: 'http://via.placeholder.com/700x300'
                },
                name: '',
                externals: {
                    imdb: ''
                },
                _embedded: {
                    seasons: [],
                    cast: []
                }
            }
        }
    }

    fetchSinglePost() {
        const config = {
            method: 'get',
            url: `http://api.tvmaze.com/shows/${this.props.match.params.id}?embed[]=seasons&embed[]=cast`,
            headers: { 'Content-Type': 'application/json' }
        }

        axios(config)
            .then(({ data }) => this.setState({ movie: data }))
            .catch(error => console.warn(error.response));
    }

    componentDidMount() {
        this.fetchSinglePost();
    }

    render() {
        console.log(this.state.movie);

        const { image, name, externals, _embedded } = this.state.movie;

        return (
            <main>
                <div className='container movie-info'>
                    <div className="card">
                        <img className="card-img-top" src={image.original} alt="Movie image" />
                        <div className="card-block container text-center">
                            <h4 className="card-title">{name}</h4>
                            <p className="card-text">IMDB : {externals.imdb} </p>
                        </div>
                        <ul className="list-group list-group-flush">
                            <li className="list-group-item">
                                Seasons
                                <span className="badge badge-default badge-pill float-right badge-size">{_embedded.seasons.length}</span>
                            </li>
                            <li className="list-group-item">
                            Cast
                            <span className="badge badge-default badge-pill float-right badge-size">{_embedded.cast.length}</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </main>
        );
    }
};

export default MovieDetails;