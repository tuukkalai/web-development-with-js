import React from 'react';
import { Link } from 'react-router';

import HelloWorld from './HelloWorld';
import Counterizer from './Counterizer';
import Counter from './Counter';

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

                <Link to="/kartta">
                    Kartta
                </Link>
            </div>
        );
    }
});

export default Index;
