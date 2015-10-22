import React from 'react';

import HelloWorld from './HelloWorld';
import Counterizer from './Counterizer';
import Counter from './Counter';
import { GoogleMap, Marker } from 'react-google-maps';


const Index = React.createClass({
    render: function() {
        const { count, names, onIncrementCounter } = this.props;
        return (
            <div>
                {names.map((name, i) =>
                    <HelloWorld key={i} name={name}/>
                )}

                <Counterizer
                    {...this.props}
                />
                <Counter count={count}/>

                <GoogleMap containerProps={{
                        style: {
                            height: "500px",
                            margin: "20px"
                        },
                    }}
                    defaultZoom={8}
                    defaultCenter={{lat: -25.363882, lng: 131.044922}}>
                </GoogleMap>
            </div>
        );
    }
});

export default Index;
