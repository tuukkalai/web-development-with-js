import React from 'react';
import { GoogleMap, Marker } from "react-google-maps";

//const SimpleMap = React.createClass({
//    render: function() {

export default class SimpleMap extends React.Component{
    /*state = {
        markers: [{
            position: {
                lat: 60.2154805,
                lng: 24.8174217,
            },
            key: "Leppävaara",
            defaultAnimation: 2
        }],
    },*/
    render(){
        return (
            <GoogleMap containerProps={{
                    style: {
                        height: "500px",
                    },
                }}
                defaultZoom={10}
                defaultCenter={{lat: 60.2154805, lng: 24.8174217}}>
                <Marker
                    position={{lat: 60.2154805, lng: 24.8174217}}
                    defaultAnimation={2}>
                </Marker>
            </GoogleMap>

        );
    }
}

//export default SimpleMap;
