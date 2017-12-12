import React, { Component } from 'react';
import { connect } from 'react-redux';
import Chart from '../components/chart';

class WeatherList extends Component {

    renderWeather(cityData) {

        const name = cityData.city.name;
        const temperature = cityData.list.map(elem => elem.main.temp - 273);
        const pressure = cityData.list.map(elem => elem.main.pressure);
        const humidity = cityData.list.map(elem => elem.main.humidity);

        return (
            <tr key={name}>
                <td>{name}</td>
                <td>
                    <Chart data={temperature} color='orange' />
                </td>
                <td>
                    <Chart data={pressure} color='green' />
                </td>
                <td>
                    <Chart data={humidity} color='blue' />
                </td>
            </tr>
        )
    }

    render() {
        console.log(this.props.weather);
        return (
            <table className='table table-hover'>
                <thead>
                    <tr>
                        <th>City</th>
                        <th>Temperature</th>
                        <th>Pressure</th>
                        <th>Humidity</th>
                    </tr>
                </thead>
                <tbody>
                    {this.props.weather.map(this.renderWeather)}
                </tbody>
            </table>
        );
    }
}

function mapStateToProps({ weather }) {
    return { weather }
}

export default connect(mapStateToProps, null)(WeatherList);