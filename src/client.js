import '../node_modules/normalize.css/normalize.css';
import './client.css';

import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, Link, IndexRoute } from 'react-router';
import { createHistory } from 'history';

import HelloWorldApp from './components/HelloWorldApp';
import Greeter from './components/Greeter';
import Index from './components/Index';
import SimpleMap from './components/SimpleMap';


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

//console.log(losot);
//console.log(laihdutetut);
//console.log(perhe);

// Parempi esimerkki reducen käytöstä
const luvut = [5, 7, 5, 3, 1];
const keskiarvo = luvut.reduce((r, num) => {
    return r + num;
}, 0) / luvut.length;

//console.log(keskiarvo);
// ----------- FUNKTIONAALISEN OHJELMOINNIN TESTAUS LOPPUU --------------

//console.log('kvaak sanoo ankka!');
//console.log('ankka sanoo ankka!');

let history = createHistory();

const routes = (
    <Router history={history}>
        <Route path="/" component={HelloWorldApp}>
            <IndexRoute component={Index} />
            <Route path="/hello/:name" component={Greeter}></Route>
            <Route path="/kartta" component={SimpleMap}></Route>
        </Route>
    </Router>
);


ReactDOM.render(
    routes,
    document.getElementById('app')
);
