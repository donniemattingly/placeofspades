import styled from "styled-components";
import React from "react";
import {Hand} from "./Hand";
import {GameBoard} from "./GameBoard";
import {useStoreState} from "../store";
import {useDemoData} from "../hooks/useDemoData";

interface GameProps {
}

const GameContainer = styled.div`

`;

export const Game = (props: GameProps) => {

    useDemoData();

    const players = useStoreState(state => state.game.players);
    const score = useStoreState(state => state.game.scoring);
    const hand = useStoreState(state => state.game.hand);

    return (
        <GameContainer>
            <h1>Place of Spades</h1>
            <GameBoard players={players} score={score}/>
            <Hand hand={hand}/>
        </GameContainer>
    )
};