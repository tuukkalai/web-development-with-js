import '../node_modules/normalize.css/normalize.css';
import './client.css';

import React from 'react';
import ReactDOM from 'react-dom';

// ----------- FUNKTIONAALISEN OHJELMOINNIN TESTAAMISTA ----------------
// map palauttaa yhtä monta tulosta kuin sille annetaan muuttujia
const losot = ['eka', 'toka', 'kolmas'];
const laihdutetut = losot.map(loso => 'laihempi' + loso);

// reduce palauttaa yhden tuloksen
const perhe = laihdutetut.reduce((r, loso) => {
    return r + loso;
}, '');

//console.log(losot);
//console.log(laihdutetut);
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

const HelloWorldApp = React.createClass({
    render: function() {
        const names = this.props.names;
        return (
            <div>
                <h1>Mundo</h1>
                { names.map((name) =>
                    <HelloWorld name={name} />
                )}
            </div>
        );
    }
});
//Läskinuoli on sama kuin tämä
//                { names.map(function(name){
//                    return <HelloWorld name={name} />
//                })}

ReactDOM.render(
    <HelloWorldApp names={['I', 'Nimi', 'Kolmas']} />,
    document.getElementById('app')
);
