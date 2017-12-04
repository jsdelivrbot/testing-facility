import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

import './Search.css';

class Search extends Component {
    constructor(props) {
        super(props);

        this.delayTimer;
        this.search = null;
        this.state = {
            results: []
        }

        this.renderSearch = this.renderSearch.bind(this);
        this.valueHandler = this.valueHandler.bind(this);
    }

    valueHandler() {
        clearTimeout(this.delayTimer);
        this.delayTimer = setTimeout(this.renderSearch, 300);
    }

    renderSearch() {

        let query = this.search.value;

        const config = {
            method: 'get',
            url: `http://api.tvmaze.com/search/shows?q=${query}`,
            headers: { 'Content-Type': 'application/json' }
        }

        axios(config)
            .then(({ data }) => this.setState({ results: data }))
            .catch(error => console.warn(error.response));
    }

    render() {

        const { results } = this.state;

        return (
            <form className="form-inline search-form">
                <input className="form-control mr-sm-2" id="search" type="search" ref={node => { this.search = node }} onChange={this.valueHandler} placeholder="Search" aria-label="Search" />
                <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                <ul className='search-list list-group list-group-flush'>
                    {results.map(item =>
                        <li className='list-group-item border search-list-item' key={item.show.id}>
                            <Link className='search-link-item' to={`/${item.show.id}`}>
                                {item.show.name}
                                <span className="badge badge-default badge-pill float-right badge-size">{item.show.rating.average}</span>
                            </Link>
                        </li>)}
                </ul>
            </form>
        );
    }
}

export default Search;