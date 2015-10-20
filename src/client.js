import '../node_modules/normalize.css/normalize.css';
import './client.css';

import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';


function getTussit(){
    return axios.get('/api/tussi').then((response) => {
        return response.data;
    });
}
//console.log(getTussit());
//const tussit = getTussit();
//tussit.then((data) => console.log(data));

// ----------- FUNKTIONAALISEN OHJELMOINNIN TESTAAMISTA ----------------
// map palauttaa yhtä monta tulosta kuin sille annetaan muuttujia
// map tarvitsee key-parametrin (tässä i), jotta ei tule warningia
const losot = ['eka', 'toka', 'kolmas'];
const laihdutetut = losot.map((loso, i) => {
    return 'laihempi' + loso;
});

// reduce palauttaa yhden tuloksen
const perhe = laihdutetut.reduce((r, loso) => {
    return r + loso;
}, '');

console.log(losot);
console.log(laihdutetut);
//console.log(perhe);

// Parempi esimerkki reducen käytöstä
const luvut = [5, 7, 5, 3, 1];
const keskiarvo = luvut.reduce((r, num) => {
    return r + num;
}, 0) / luvut.length;

//console.log(keskiarvo);
// ----------- FUNKTIONAALISEN OHJELMOINNI TESTAUS LOPPUU --------------

//console.log('kvaak sanoo ankka!');
//console.log('ankka sanoo ankka!');

const HelloWorld = React.createClass({
    render: function() {
        return (
            <div>
                Hello { this.props.name }
            </div>
        );
    }
});

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

class Counter extends React.Component {
    render() {
        return (
            <div className="megalaskuri">
                {this.props.count}
            </div>
        );
    }
};



const HelloWorldApp = React.createClass({
    getInitialState: function() {
        return {
            count: 0,
            name: 'naame',
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
                <h1>Mundo</h1>
                { names.map((name, key) => {
                    return <HelloWorld key={key} name={name} />
                })}

                <Counterizer {...this.state} onIncrementCounter={this.incrementCounter} />
                <Counter count={this.state.count} />
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

ReactDOM.render(
    <HelloWorldApp />,
    document.getElementById('app')
);
