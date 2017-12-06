import React, { Component } from 'react';
import MapGL from 'react-map-gl';
import axios from 'axios';
import './App.css';

import { WEATHER_API_KEY, MAPS_API_KEY, BASE_URL } from '../constants';
import { Sparklines, SparklinesLine } from 'react-sparklines';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = this.initState()
  }

  initState() {
    return {
      citybulk: {},
      temp: [],
      wind: [],
      cityList: []
    }
  }

  collectCityData = (param = 'Belgrade') => {

    axios({
      method: 'get',
      url: BASE_URL,
      params: {
        q: param,
        APPID: WEATHER_API_KEY,
        mode: 'json'
      }
    })
      .then(({ data }) => this.setState({ cityList:[data, ...this.state.cityList] }))
      .catch(error => console.warn(error));
  }

  restructureData = (city) => {
    const temp = city.list.map(item => item.main.temp);
    const wind = city.list.map(item => item.wind.speed);

    return { temp, wind }
  }

  renderCities = () => {
    return this.state.cityList.map(city => {
      const { temp, wind } = this.restructureData(city);

      return (
        <div className='col s12' key={city.city.id}>
          <div className='row'>
            <div className='col s4 map center'>
              <div className='row'>
                <div className='col s12'> MAP of {city.city.name}</div>
                <div className='col s12'>
                  <MapGL
                    latitude={city.city.coord.lat}
                    longitude={city.city.coord.lon}
                    zoom={8}
                    height={120}
                    width={220}
                    mapStyle="mapbox://styles/mapbox/light-v9"
                    mapboxApiAccessToken={MAPS_API_KEY}
                  >
                  </MapGL>
                </div>
              </div>
            </div>
            <div className='col s4 spark1 row'>
              <div className='col s12'>Average Temperature</div>
              <div className='col s12'>
                <Sparklines data={temp} height={140} margin={5}>
                  <SparklinesLine style={{ color: 'red' }} />
                </Sparklines>
              </div>
            </div>
            <div className='col s4 spark2 row'>
              <div className='col s12'>Average Wind Speed</div>
              <div className='col s12'>
                <Sparklines data={wind} height={140} margin={5}>
                  <SparklinesLine style={{ color: 'blue' }} />
                </Sparklines>
              </div>
            </div>
          </div>
        </div>
      )
    })
  }

  componentDidMount() {
    this.collectCityData();
  }

  render() {
    return (
      <div className='app'>
        <div className='row'>
          <div className='col s12'>
            <h3 className='deep-orange-text lighten-5'>Weather Forecast</h3>
          </div>
          <form className='col s12 row' onSubmit={
            (e) => {
              e.preventDefault();
              this.collectCityData(this.search.value)
            }}>
            <div className='input-field col s6 offset-s3'>
              <input id='search' type='search' className='validate' ref={node => { this.search = node }} />
              <label htmlFor='search'>Search Cities</label>
            </div>
          </form>
          {this.renderCities()}
        </div>
      </div>
    );
  }
}

export default App;
