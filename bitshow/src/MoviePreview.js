import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import './MoviePreview.css';

const MoviePreview = props => {

    let source = 'http://via.placeholder.com/500x1000'
    const { image, name, id } = props.movie.show;
    if (image) {
        source = image.medium;
    }

    return (

        <article className='col-4 preview'>
            <Link to={`/${id}`}>
                <div className="card">
                    <div className='container-item'>
                        <img className="card-img-top rounded" src={source} alt="" />
                        <div className='overlay'>
                            <div className='info'>More Info</div>
                        </div>
                    </div>
                    <div className="card-body">
                        <p className="card-text">{name}</p>
                    </div>
                </div>
            </Link>
        </article>
    );
};

MoviePreview.propTypes = {
    movie: PropTypes.object.isRequired
};


export default MoviePreview;