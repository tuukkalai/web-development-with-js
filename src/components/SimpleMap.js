import React from 'react';
import {GoogleMap, Marker} from 'react-google-maps';

export default React.createClass ({
    render: function(){
        return (
            <GoogleMap containerProps={{
                    style: {
                        height: "500px",
                    },
                }}
                defaultZoom={3}
                defaultCenter={{lat: -25.363882, lng: 131.044922}}>
            </GoogleMap>
        );
    }
});
