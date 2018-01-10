import React, { Component } from 'react';
import ChatBot from 'react-simple-chatbot';

class Review extends Component {
	constructor(props) {
		super(props);

		this.state = {
			ime: '',
			visina: '',
			tezina: ''
		};
	}

	componentWillMount() {
		const { ime, visina, tezina } = this.props.steps;

		this.setState({ ime, visina, tezina });
	}

	render() {
		const { ime, visina, tezina } = this.state;

		return (
			<div style={{ width: '100%' }}>
				<h3
					style={{
						margin: '0',
						padding: '5px 0',
						textAlign: 'center'
					}}
				>
					Summary:
				</h3>
				<ul
					style={{
						listStyle: 'none',
						padding: '0',
						margin: '0',
						textAlign: 'left'
					}}
				>
					<li>ime: {ime.value}</li>
					<li>visina: {visina.value}cm</li>
					<li>tezina: {tezina.value}kg</li>
				</ul>
			</div>
		);
	}
}

const validateNumbers = value => {
	if (isNaN(value)) {
		return 'Unesi broj molim te';
	}
	if (value < 0) {
		return 'Necemo negativne brojeve';
	}
	return true;
};

const handleEnd = ({ renderedSteps, values }) => console.info({ renderedSteps, values });

let style = {
    backgroundColor: 'seashell'
}

let steps = [
	{
		id: '1',
		message: 'Kako se zoves?',
		trigger: 'ime'
	},
	{
		id: 'ime',
		user: true,
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
		validator: validateNumbers,
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
		validator: validateNumbers,
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
