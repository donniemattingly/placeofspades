import styled from "styled-components";
import React from "react";
import {PlayingCard} from "./PlayingCard";
import {Avatar} from "./Avatars";

const GameBoardContainer = styled.div`
  display: grid;
  grid-column-gap: 0.5em;
  grid-row-gap: 1em;
  grid-template-columns: 1fr 1fr 1fr;
  //grid-template-rows: var(--board-row-height) var(--board-row-height) var(--board-row-height);
  align-items: center;
  
  border-radius: 20vw;
   opacity: 1;
  
  height: 50%;
  margin: 1em;
  padding: 1em;
  background-color: #84a98c;
`;

const PlayerCardContainer = styled.div`
  display:flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  
  color: var(--black)
`;

interface PlayerContainerProps {
    direction?: 'row' | 'column' | 'row-reverse' | 'column-reverse'
}

const PlayerContainer = styled.div<PlayerContainerProps>`
   display: flex;
   flex-direction: ${props => props.direction ?? 'row'};
   justify-content: center;
   align-items: center;
`;


const PlayerInfoContainer = styled.div`
`;

const TopPlayerGridContainer = styled.div`
  grid-area: 1 / 2 / 2 / 3;
`;

const LeftPlayerGridContainer = styled.div`
    grid-area: 2 / 1 / 3 / 2;
`;


const RightPlayerGridContainer = styled.div`
    grid-area: 2 / 3 / 3 / 4;
`;

const BottomPlayerGridContainer = styled.div`
   grid-area: 3 / 2 / 4 / 3;
`;

export const GameBoard = () => {
    return (
        <GameBoardContainer>
            <TopPlayerGridContainer>
                <PlayerContainer>
                    <PlayerCardContainer>
                        <PlayingCard rank={'A'} suit={'hearts'}/>
                        Top Player
                    </PlayerCardContainer>
                </PlayerContainer>
            </TopPlayerGridContainer>
            <LeftPlayerGridContainer>
                <PlayerContainer>
                    <PlayerCardContainer>
                        <PlayingCard rank={'A'} suit={'hearts'}/>
                        Left Player
                    </PlayerCardContainer>
                </PlayerContainer>
            </LeftPlayerGridContainer>
            <RightPlayerGridContainer>
                <PlayerContainer>
                    <PlayerCardContainer>
                        <PlayingCard rank={'A'} suit={'hearts'}/>
                        Right Player
                    </PlayerCardContainer>
                </PlayerContainer>
            </RightPlayerGridContainer>
            <BottomPlayerGridContainer>
                <PlayerContainer>
                    <PlayerCardContainer>
                        <PlayingCard rank={'A'} suit={'hearts'}/>
                        Bottom Player
                    </PlayerCardContainer>
                </PlayerContainer>
            </BottomPlayerGridContainer>
        </GameBoardContainer>
    )
};