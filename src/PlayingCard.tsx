import React, {Component, FunctionComponent} from "react";
import styled from "styled-components";
import {ReactComponent as Club} from './images/club.svg';
import {ReactComponent as Diamond} from './images/diamond.svg';
import {ReactComponent as Heart} from './images/heart.svg';
import {ReactComponent as Spade} from './images/spade.svg';


// Instead of trying to be Fancy, just going to be a big character indicating the card
// with a small icon of the suit

const FlexColumn = styled.div`
   display: flex;
   flex-direction: column;
   justify-content: space-between;
`;

export type Suit = 'clubs' | 'diamonds' | 'hearts' | 'spades';
export type Rank = 'A' | 'K' | 'Q' | 'J' | 10 | 9 | 8 | 7 | 6 | 5 | 4 | 3 | 2;

interface PlayingCardProps {
    rank: 'A' | 'K' | 'Q' | 'J' | 10 | 9 | 8 | 7 | 6 | 5 | 4 | 3 | 2;
    suit: 'clubs' | 'diamonds' | 'hearts' | 'spades';
    fourColor?: boolean
}

const SuitImageContainer = styled.div`
  
  svg {
    width: 70%;
  }
  
  svg path {
    fill: ${props => props.color};
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
  font-size: 3em;
  text-align: start;
  color: ${props => props.color}
`;

const CardRank = (props: RankProps) => {
    return (
        <RankContainer color={props.color}>
            {props.rank}
        </RankContainer>
    )
};

const PlayingCardContainer = styled.div`
  background: #FFFFFF 0 0 no-repeat padding-box;
  box-shadow: 3px 3px 25px #0000001C;
  border-radius: 9px;
  opacity: 1;
  
  padding: 1em;
  margin: 1em;
  
  width: 100px;
  height: 140px;
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