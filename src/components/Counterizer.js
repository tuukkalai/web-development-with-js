import React from 'react';

const Counterizer = React.createClass({

    render: function() {
        const { count, name, onIncrementCounter } = this.props;
        /*const count = this.props.count;
        const name = this.props.name;
        const onIncrementCounter = this.props.onIncrementCounter;*/
        return (
            <div className="laskuri">
                {count}
                {name}

                <button onClick={onIncrementCounter}>Lisää</button>
            </div>
        );
    }
});

export default Counterizer;
