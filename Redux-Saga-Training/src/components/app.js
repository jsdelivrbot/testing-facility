import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions/authors';

import global_css from '../../style/global';
import styles from '../../style/app';

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			search: ''
		};
		this.activateSaga = this.activateSaga.bind(this);
		this.onSearchChange = this.onSearchChange.bind(this);
	}

	activateSaga() {
		this.props.fetchAuthors();
	}

	renderButton() {
		return (
			<button
				onClick={this.activateSaga}
				className={'large' in this.props && 'large'}
			>
				Load data
			</button>
		);
	}

	renderList(data) {
		return data.map(({ name, id }) => <li key={id}>{name}</li>);
	}

	onSearchChange({ target }) {
		const { updateSearch, resetSearch } = this.props;
		const search = target.value;
		this.setState({ search });

		search ? updateSearch(search) : resetSearch();
	}

	render() {
		const { isLoaded, isLoading, data, error } = this.props.authors;
		const { isUpdated, search } = this.props.search;

		return (
			<div>
				<p className="title">Saga demo</p>
				<input
					type="search"
					name="search"
					value={this.state.search}
					onChange={this.onSearchChange}
				/>
				{isUpdated ? <span> Search term was: {search}</span> : ''}
				<p className="title">Authors</p>
				{!isLoaded ? (
					this.renderButton()
				) : (
					<ul>{this.renderList(data)}</ul>
				)}
				{isLoading ? <p>Loading...</p> : ''}
				{error ? <p>{error.message}</p> : ''}

				<style jsx>{global_css}</style>
				<style jsx>{styles}</style>
			</div>
		);
	}
}

const mapStateToProps = ({ authors, search }) => ({ authors, search });

export default connect(mapStateToProps, actions)(App);
