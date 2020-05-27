import styled from "styled-components";
import React from "react";
import {Scoring} from "../types/Types";


const ScoreContainer = styled.div`

`;

export const Score = ({us, them}: Scoring) => {
    return (
        <ScoreContainer>
            Us: {us.tricks} / {us.bid}
            <br/>
            Them: {them.tricks} / {them.bid}
        </ScoreContainer>
    )
};