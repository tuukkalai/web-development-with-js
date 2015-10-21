import React from 'react';
import api from '../api.js';

const HelloWorldApp = React.createClass({
    getInitialState: function() {
        return {
            count: 0,
            name: ' - ',
            names: []
        };
    },
    componentDidMount: function(){
        api.getTussit().then((data) => {
            this.setState({
                names: data
            });
        });
    },
    render: function() {
        const names = this.state.names;

        return (
            <div>
                <h1>Lusso</h1>

                {this.props.children && React.cloneElement(
                    this.props.children,
                    {
                        names: this.state.names,
                        count: this.state.count,
                        onIncrementCounter: this.incrementCounter
                    }
                )}
            </div>
        );
    },
    incrementCounter: function(){
        this.setState({
            count: this.state.count + 1
        });
    }
});
//Läskinuoli on sama kuin tämä
//                { names.map(function(name){
//                    return <HelloWorld name={name} />
//                })}

// -------- STATE ----------
//
// <Counterizer count={this.state.count} onIncrementCounter={this.onIncrementCounter} />
// <Counterizer {...this.state} onIncrementCounter={this.incrementCounter} />


export default HelloWorldApp;
