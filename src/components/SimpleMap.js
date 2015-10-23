import React from 'react';
import { Link } from 'react-router';
import { GoogleMap, Marker, InfoWindow, Circle } from 'react-google-maps';
import canUseDOM from 'can-use-dom';
import raf from 'raf';
import { default as I, List, Map, Range, Repeat } from 'immutable';

const geolocation = (
  canUseDOM && navigator.geolocation || {
    getCurrentPosition: (success, failure) => {
      failure("Your browser doesn't support geolocation.");
    },
  }
);

export default class SimpleMap extends React.Component{

    state = {
        center: null,
        content: null,
        radius: 4000,
        zoom: 12
    }

    componentDidMount () {
        geolocation.getCurrentPosition((position) => {
            this.setState({
                center: {
                    lat: position.coords.latitude,
                    lng: position.coords.longitude,
                },
                //content: "Location found."
            });

            const tick = () => {
                this.setState({ radius: Math.max(this.state.radius - 80, 10) });
                //this.setState({ zoom: Math.max(this.state.zoom + 1, 0) });

                if (this.state.radius > 100) {
                    raf(tick);
                }

                // -------- Karttazoomi-animaatio ----------
                //if (this.state.zoom < 14){
                //    raf(tick);
                //}
            };
            raf(tick);

        }, (reason) => {
            this.setState({
                center: {
                    lat: 60.2154805,
                    lng: 24.8174217
                },
                content: `Error: The Geolocation service failed (${ reason }).`
            });
        });
    }

    render () {
        const {center, content, radius, zoom} = this.state;
        let contents = [];

        if (center) {
            contents = contents.concat([
                (<InfoWindow key="info" position={center} content={content} />),
                (<Circle key="circle" center={center} radius={radius} options={{
                        fillColor: "blue",
                        fillOpacity: 0.3,
                        strokeColor: "blue",
                        strokeOpacity: 0.8,
                        strokeWeight: 0.6,
                    }}
                />),
            ]);
        }

        const ret = Map(contents);

        console.log(ret);

        return (
            <GoogleMap containerProps={{
                ...this.props,
                style: {
                    height: "500px",
                },
            }}
            zoom={zoom}
            center={center}>
                {contents}
            </GoogleMap>
        );
    }
}
