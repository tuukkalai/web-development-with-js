import React from 'react';
import axios from 'axios';
//import Counterizer from './Counterizer';
//import Counter from './Counter';
//import HelloWorld from './HelloWorld';


function getTussit(){
    return axios.get('/api/tussi').then((response) => {
        return response.data;
    });
}
//console.log(getTussit());
//const tussit = getTussit();
//tussit.then((data) => console.log(data));

const HelloWorldApp = React.createClass({
    getInitialState: function() {
        return {
            count: 0,
            name: ' - ',
            names: []
        };
    },
    componentDidMount: function(){
        getTussit().then((data) => {
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
