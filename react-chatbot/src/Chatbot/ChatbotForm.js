import React, { Component } from 'react';
import { object } from 'prop-types';
import ChatBot from 'react-simple-chatbot';

const style = {
	body: {
		backgroundColor: 'seashell'
	},
	ul: {
		listStyle: 'none',
		padding: '0',
		margin: '0',
		textAlign: 'left'
	},
	h3: {
		margin: '0',
		padding: '5px 0',
		textAlign: 'center'
	},
	div: {
		width: '100%',
		fontFamily: 'Avenir'
	}
};

class Review extends Component {
	state = {
		ime: '',
		visina: '',
		tezina: ''
	};

	static propTypes = {
		steps: object.isRequired
	}

	static defaultProps = {
		steps: {}
	}

	componentWillMount() {
		const { ime, visina, tezina } = this.props.steps;

		this.setState({ ime, visina, tezina });
	}

	render() {
		const { ime, visina, tezina } = this.state;

		return (
			<div style={style.div}>
				<h3 style={style.h3}>Podaci:</h3>
				<ul style={style.ul}>
					<li>ime: {ime.value}</li>
					<li>visina: {visina.value}cm</li>
					<li>tezina: {tezina.value}kg</li>
				</ul>
			</div>
		);
	}
}

const validate = () => {
	const numbers = value => {
		if (!value) {
			return 'Obavezno polje';
		}
		if (isNaN(value)) {
			return 'Unesi broj molim te';
		}
		if (value < 0) {
			return 'Necemo negativne brojeve';
		}
		return true;
	};

	const name = value => {
		if (!value) {
			return 'Ne moguce da nemas ime';
		}
		if (!isNaN(value)) {
			return 'Samo slova molicu lepo';
		}
		return true;
	};

	return { numbers, name };
};

const handleEnd = ({ renderedSteps, values }) =>
	console.info({ renderedSteps, values });

const steps = [
	{
		id: '1',
		message: 'Kako se zoves?',
		trigger: 'ime'
	},
	{
		id: 'ime',
		user: true,
		validator: validate().name,
		trigger: '3'
	},
	{
		id: '3',
		message: 'Cao {previousValue}, koliko si visok? (u cm)',
		trigger: 'visina'
	},
	{
		id: 'visina',
		user: true,
		validator: validate().numbers,
		trigger: '5'
	},
	{
		id: '5',
		message: '{previousValue}cm, vazi, A koliko si tezak? (u kg)',
		trigger: 'tezina'
	},
	{
		id: 'tezina',
		user: true,
		validator: validate().numbers,
		trigger: '7'
	},
	{
		id: '7',
		component: <Review />,
		asMessage: true,
		trigger: '8'
	},
	{
		id: '8',
		message: 'Da li bi nesto promenio?',
		trigger: 'potvrdi'
	},
	{
		id: 'potvrdi',
		options: [
			{ value: 'da', label: 'Da', trigger: '9' },
			{ value: 'ne', label: 'Ne', trigger: 'kraj' }
		]
	},
	{
		id: '9',
		message: 'Okej... Sta bi promenio?',
		trigger: '10'
	},
	{
		id: '10',
		options: [
			{ value: 'ime', label: 'Ime', trigger: 'update_ime' },
			{ value: 'visina', label: 'Visina', trigger: 'update_visina' },
			{ value: 'tezina', label: 'Tezina', trigger: 'update_tezina' }
		]
	},
	{
		id: 'update_ime',
		update: 'ime',
		trigger: '7'
	},
	{
		id: 'update_visina',
		update: 'visina',
		trigger: '7'
	},
	{
		id: 'update_tezina',
		update: 'tezina',
		trigger: '7'
	},
	{
		id: 'kraj',
		message: 'To je to onda, forma je poslata!',
		trigger: 'bye'
	},
	{
		id: 'bye',
		message: 'Ostavio sam korisne podatke u konzoli!',
		end: true
	}
];

const Chatbot = () => (
	<ChatBot
		steps={steps}
		handleEnd={handleEnd}
		headerTitle={'Klasican bot'}
		placeholder={'Pisi ovde...'}
		style={style}
	/>
);

export default Chatbot;
