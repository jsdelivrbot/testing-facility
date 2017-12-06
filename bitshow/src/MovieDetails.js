import React, { Component } from 'react';
import axios from 'axios';

import './MovieDetails.css';

class MovieDetails extends Component {
    constructor(props) {
        super(props);

        this.state = {
            movie: {
                image: {
                    original: 'http://via.placeholder.com/700x1000'
                },
                name: '',
                rating: {
                    average: 'N/A'
                },
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

    fetchSinglePost(showId) {
        const config = {
            method: 'get',
            url: `http://api.tvmaze.com/shows/${showId}?embed[]=seasons&embed[]=cast`,
            headers: { 'Content-Type': 'application/json' }
        }

        axios(config)
            .then(({ data }) => this.setState({ movie: data }))
            .catch(error => console.warn(error.response));
    }

    componentDidMount() {
        this.fetchSinglePost(this.props.match.params.id);
    }

    componentWillReceiveProps(nextProps) {
        this.fetchSinglePost(nextProps.match.params.id)
    }

    render() {

        console.log(this.state.movie);

        const { image, name, externals, _embedded, rating } = this.state.movie;

        return (
            <main className='main-div'>
                <div className='container movie-info'>
                    <div className="card">
                        <img className="card-img-top" src={image.original} alt="" />
                        <div className="card-block container text-center title-bar">
                            <h4 className="card-title">{name}</h4>
                            <p className="card-text">IMDB Rating :
                                <span className="badge badge-default badge-pill badge-size">
                                    <a href={`http://www.imdb.com/title/${externals.imdb}/`} target="_blank"> {rating.average}</a>
                                </span>
                            </p>
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

<div id="accordion" role="tablist" aria-multiselectable="true">
    <div class="card">
        <div class="card-header" role="tab" id="headingOne">
            <h5 class="mb-0">
                <a data-toggle="collapse" data-parent="#accordion" href="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                    Seasons
      </a>
            </h5>
        </div>

        <div id="collapseOne" class="collapse show" role="tabpanel" aria-labelledby="headingOne">
            <div class="card-block">
                Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
    </div>
        </div>
    </div>
    <div class="card">
        <div class="card-header" role="tab" id="headingTwo">
            <h5 class="mb-0">
                <a class="collapsed" data-toggle="collapse" data-parent="#accordion" href="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                    Cast
      </a>
            </h5>
        </div>
        <div id="collapseTwo" class="collapse" role="tabpanel" aria-labelledby="headingTwo">
            <div class="card-block">
                Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
    </div>
        </div>
    </div>
</div>