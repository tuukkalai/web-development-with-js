import React from 'react';
import history from 'history';
//import { Link } from 'react-router';

const Greeter = React.createClass({
    render: function(){
        //console.log(this.props);
        const { name } = this.props.params;
        return (
            <h1>
                Hello {name}
            </h1>
            //<button onClick={history.back}>Takaisin</button>
        );
    }
});

export default Greeter;
