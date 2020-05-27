import React, {useState} from "react";
import styled from "styled-components";
import {PlayingCard} from "./PlayingCard";
import {sortHand} from "../CardUtils";
import {Card} from "../types/Card";
import {useStoreActions} from "../store";

interface HandProps {
    hand: Card[]
}

const HandContainer = styled.div`
            display: flex;
            width: 100%;
            justify-content: center;
            flex-wrap: wrap;
`;

export const Hand = (props: HandProps) => {
    const hand = sortHand(props.hand);
    const [condensed, setCondensed] = useState(false);
    const playCard = useStoreActions(actions => actions.game.playCard);

    const onClick = (card: Card) => {
        playCard(card);
    };

    if (condensed) {
        return <CondensedHand hand={hand}/>
    } else {
        return (
            <HandContainer>
                {hand.map(card => <PlayingCard key={`${card.rank}${card.suit}`} onClick={() => onClick(card)} rank={card.rank} suit={card.suit}/>)}

                <button onClick={() => setCondensed(!condensed)}>
                    Toggle
                </button>
            </HandContainer>
        )
    }
};

const CondensedHandContainer = styled.div`

`;

const CondensedHand = (props: HandProps) => {
    return (
        <CondensedHandContainer>
            {props.hand.map(card => <CondensedCard {...card} />)}
        </CondensedHandContainer>
    )
};


const CondensedCardContainer = styled.div`

`;

interface CondensedCardProps extends Card {
}

const CondensedCard = ({suit, rank}: CondensedCardProps) => {
    return (
        <CondensedCardContainer>
            <span>{suit}</span>
            <span>{rank}</span>
        </CondensedCardContainer>
    )
};