import styled from "styled-components";
import React from "react";
import {Hand} from "./Hand";
import {GameBoard} from "./GameBoard";
import {getShuffledHand} from "./CardUtils";

interface GameProps {
}

const GameContainer = styled.div`

`;

export const Game = (props: GameProps) => {
    return (
        <GameContainer>
            <h1>Place of Spades</h1>
            <GameBoard/>
            <Hand hand={getShuffledHand(13)}/>
        </GameContainer>
    )
};