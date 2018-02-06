import React from 'react';

const google = window.google;

export default class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: ''
    };
  }

  handleChange = event => {
    this.setState({
      value: event.target.value
    });
  };

  handleClick = event => {
    const geocoder = new google.maps.Geocoder();
    this.geocodeAddress(geocoder, this.props.map);
  };

  geocodeAddress(geocoder, resultsMap) {
    let address = this.state.value;

    geocoder.geocode({ address: address }, function(results, status) {
      if (status === 'OK') {
        console.log('results', results, resultsMap);
        resultsMap.setCenter(results[0].geometry.location);
        let marker = new google.maps.Marker({
          map: resultsMap,
          position: results[0].geometry.location
        });
      } else {
        alert('Geocode was not succesful for the following reason:' + status);
      }
    });
  }
  render() {
    console.log('this.props.map', this.props.map);
    return (
      <div className="">
        <input
          id="address"
          value={this.state.value}
          onChange={this.handleChange}
        />
        <button id="submit" onClick={this.handleClick}>
          Show
        </button>
      </div>
    );
  }
}
