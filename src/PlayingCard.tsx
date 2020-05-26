import React, {Component, FunctionComponent} from "react";
import styled from "styled-components";
import {ReactComponent as Club} from './images/club.svg';
import {ReactComponent as Diamond} from './images/diamond.svg';
import {ReactComponent as Heart} from './images/heart.svg';
import {ReactComponent as Spade} from './images/spade.svg';
import {Card, Rank, Suit} from "./types/Card";


// Instead of trying to be Fancy, just going to be a big character indicating the card
// with a small icon of the suit

const FlexColumn = styled.div`
   display: flex;
   flex-direction: column;
   justify-content: space-between;
`;

interface PlayingCardProps extends Card {
    fourColor?: boolean
}

const SuitImageContainer = styled.div`
  
  svg {
    width: 70%;
  }
  
  svg path {
    fill: ${props => props.color === 'red' ? 'var(--red)' : 'var(--black)'}
  }
`;

interface RankProps {
    rank: Rank;
    color?: string;
}

interface SuitImageProps {
    color: string;
    suit: Suit;
}

const SuitImage = (props: SuitImageProps) => {
    let SuitImageComponent: FunctionComponent;
    switch (props.suit) {
        case "clubs":
            SuitImageComponent = Club;
            break;
        case "diamonds":
            SuitImageComponent = Diamond;
            break;
        case "hearts":
            SuitImageComponent = Heart;
            break;
        case "spades":
            SuitImageComponent = Spade;
            break;
    }

    return (
        <SuitImageContainer color={props.color}>
            <SuitImageComponent/>
        </SuitImageContainer>
    )
};

const RankContainer = styled.div`
  font-size: var(--rank-size);
  text-align: start;
  color: ${props => props.color === 'red' ? 'var(--red)' : 'var(--black)'}
`;

const CardRank = (props: RankProps) => {
    return (
        <RankContainer color={props.color}>
            {props.rank}
        </RankContainer>
    )
};

const PlayingCardContainer = styled.div`
  
  width: var(--card-width);
  height: var(--card-height);
  
  background: #FFFFFF 0 0 no-repeat padding-box;
  box-shadow: 3px 3px 25px #0000001C;
  border-radius: 9px;
  opacity: 1;
  
  padding: 1em;
  margin: 0.5em 0.5em;
`;

const getColor = (suit: Suit, isFourColorDeck = false) => {
    switch (suit) {
        case "clubs":
            return isFourColorDeck ? 'green' : 'black';
        case "diamonds":
            return isFourColorDeck ? 'blue' : 'red';
        case "hearts":
            return 'red';
        case "spades":
            return 'black';
    }
};

export const PlayingCard = (props: PlayingCardProps) => {
    const color = getColor(props.suit, props.fourColor);
    return (
        <PlayingCardContainer>
            <FlexColumn>
                <CardRank color={color} rank={props.rank}/>
                <SuitImage color={color} suit={props.suit}/>
            </FlexColumn>
        </PlayingCardContainer>
    )
};