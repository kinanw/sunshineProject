import React, { Component } from "react";
import ReactDOM from "react-dom";

export default class AddressMapContainer extends Component {
  state = {
    locations: [
      {
        label: "Sunshine Cleaners Of Central Florida LLC",
        name: "Sunshine Cleaners Of Central Florida LLC",
        location: { lat: 28.5751204, lng: -81.51671809999999 }
      }
    ]
  };

  componentDidMount() {
    this.loadMap();
    this.forceUpdate();
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.google !== this.props.google) {
      console.log("updating props");
      this.loadMap();
    }
  }
  loadMap() {
    if (this.props && this.props.google) {
      const { google } = this.props;
      const maps = google.maps;
      const mapRef = this.refs.map;
      const node = ReactDOM.findDOMNode(mapRef);

      const mapConfig = Object.assign(
        {},
        {
          center: { lat: 28.5691677, lng: -81.5439619 },
          zoom: 13,
          mapTypeId: "roadmap"
        }
      );

      this.map = new maps.Map(node, mapConfig);

      this.state.locations.forEach(location => {
        const marker = new google.maps.Marker({
          position: { lat: location.location.lat, lng: location.location.lng },
          map: this.map,
          title: location.name
        });
      });
    }
  }

  render() {
    const style = {
      width: "75vw",
      height: "70vh"
    };

    return (
      <div className="w3-content w3-container w3-panel w3-white w3-padding-64">
        <div className="w3-row w3-center">
          <OurLocation />
        </div>
        <div className="w3-row w3-center">
          <div ref="map" style={style}>
            loading map...
          </div>
        </div>
      </div>
    );
  }
}

class OurLocation extends Component {
  render() {
    return (
      <address>
        <h3>Sunshine Cleaners Of Central Florida LLC</h3>
        <br />
        391 N. Clarke Rd, Ocoee, Fl 34761<br />
        Located at Silver Star & Clarke Rd.<br /> In the Publix Plaza.<br />
        Silver Crossing Shopping Center
      </address>
    );
  }
}
