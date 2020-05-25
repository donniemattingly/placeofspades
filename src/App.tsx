import React from 'react';
import logo from './logo.svg';
import './App.css';
import {PlayingCard, Rank, Suit} from "./PlayingCard";
import {Hand} from "./Hand";

function App() {
    const suits: Suit[] = ['spades', 'diamonds', 'clubs', 'hearts'];
    const ranks: Rank[] = ['A', 'K', 'Q', 'J', 10, 9, 8, 7, 6, 5, 4, 3, 2];

    const cards = suits.flatMap((s) => ranks.map(r => ({rank: r, suit: s})));

    const smallCards = cards;

    return (
        <div className="App">
           <Hand/>
        </div>
    );
}

export default App;
