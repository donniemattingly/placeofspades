import React from 'react';
import logo from './logo.svg';
import './App.css';
import {PlayingCard, Rank, Suit} from "./PlayingCard";

function App() {
    const suits: Suit[] = ['spades', 'diamonds', 'clubs', 'hearts'];
    const ranks: Rank[] = ['A', 'K', 'Q', 'J', 10, 9, 8, 7, 6, 5, 4, 3, 2];

    const cards = suits.flatMap((s) => ranks.map(r => ({rank: r, suit: s})));

    const smallCards = cards;

    return (
        <div className="App" style={{
            display: 'flex',
            width: '100%',
            height: '100vh',
            justifyContent: 'center',
            alignItems: 'space-between',
            flexWrap: 'wrap'
        }}>
            {smallCards.map(card => (
                <div>
                    <PlayingCard
                        fourColor={false}
                        suit={card.suit}
                        rank={card.rank}/>
                        <br/>
                </div>
            ))}
        </div>
    );
}

export default App;
