import React, { Component } from 'react';
import MapGL, { Marker } from 'react-map-gl';

class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      viewport: {
        latitude: 37.78,
        longitude: -122.41,
        zoom: 11,
        width:400,
        height:400
      }
    }
  }

  handleClick(num) {
    if (num === '1') {
      let viewport = Object.assign({}, this.state.viewport, {
        latitude: 44.804,
        longitude: 20.465
      })
      this.setState({ viewport });
    } 
    if (num === '2') {
      let viewport = {...this.state.viewport, ...{
        latitude: 52.524,
        longitude: 13.410
      }}
      this.setState({ viewport });
    }
  }

  render() {

    const style = {
      padding: "10px",
      color: "#fff",
      cursor: "pointer",
      background: "#1978c8",
      borderRadius: "6px"
    };

    const Element = <div id='MARKER' style={style}>Click me!</div>;
    
    const { viewport } = this.state;

    return (
      <div>
        <MapGL
          {...this.state.viewport}
          mapStyle="mapbox://styles/mapbox/light-v9"
          mapboxApiAccessToken={'pk.eyJ1IjoiaXNob25lIiwiYSI6ImNqYXRlem94ejF3cmUycXBmMDB2dGFyNm0ifQ.9JEHWNwfe62h2i43u7f3jA'}
          onViewportChange={viewport => this.setState({ viewport })}          
        >
          <Marker
            longitude={this.state.viewport.longitude}
            latitude={this.state.viewport.latitude}
            element={Element}
          />

        </MapGL>

        <button onClick={() => this.handleClick('1')}>Belgrade</button>
        <button onClick={() => this.handleClick('2')}>Berlin</button>
      </div>
    );
  }
}

export default App;
