import React from "react";
import styled from "styled-components";
import {PlayingCard, Rank, Suit} from "./PlayingCard";
import {shuffle} from "lodash-es";
import {sortHand} from "./CardUtils";

interface HandProps {

}

const HandContainer = styled.div`
            display: flex;
            width: 100%;
            height: 100vh;
            justify-content: space-around;
            flex-wrap: nowrap;
`;

const suits: Suit[] = ['spades', 'diamonds', 'clubs', 'hearts'];
const ranks: Rank[] = ['A', 'K', 'Q', 'J', 10, 9, 8, 7, 6, 5, 4, 3, 2];

const cards = suits.flatMap((s) => ranks.map(r => ({rank: r, suit: s})));

export const Hand = (props: HandProps) => {
    const hand = sortHand(shuffle(cards).slice(0, 13));

    return (
        <HandContainer>
            {hand.map(card => <PlayingCard rank={card.rank} suit={card.suit}/>)}
        </HandContainer>
    )
};