import React from 'react';

import Search from './Search';

/*global google*/

export default class Map extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      map: null
    };
  }
  componentDidMount = () => {
    this.initMap();
  };

  initMap() {
    console.log('google', google);
    // const mapContainer = this.getDOMNode().querySelector('#map');
    let map = new google.maps.Map(document.getElementById('map'), {
      zoom: 15,
      center: { lat: -34.397, lng: 150.644 }
    });
    this.setState({
      map: map
    });
  }

  render() {
    console.log('this.state.map', this.state.map);
    return (
      <div>
        <div id="map" />
        <Search map={this.state.map} />
      </div>
    );
  }
}
