import styled from "styled-components";
import React, {useState} from "react";
import {EmptyCard, PlayingCard} from "./PlayingCard";
import {GameState} from "../types/Types";
import {Score} from "./Score";
import {useInterval} from "../hooks/useInterval";

const GameBoardContainer = styled.div`
  display: grid;
  grid-column-gap: 0.5em;
  grid-row-gap: 1em;
  grid-template-columns: 1fr 1fr 1fr;
  //grid-template-rows: var(--board-row-height) var(--board-row-height) var(--board-row-height);
  align-items: center;
  
  border-radius: 15vw;
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
    active?: boolean
}

const PlayerContainer = styled.div<PlayerContainerProps>`
   display: flex;
   flex-direction: ${props => props.direction ?? 'row'};
   justify-content: center;
   align-items: center;
   
   ${(props) => props.active && `
    background-color: var(--yellow); 
  `};
   padding: 1vw;
   border-radius: 6vw;
`;

interface GridItemProps {
    gridArea: string;
}

const GridItemContainer = styled.div<GridItemProps>`
  grid-area: ${props => props.gridArea};
`;

const clockWiseGridAreaList = [
    '1 / 2 / 2 / 3',
    '2 / 3 / 3 / 4',
    '3 / 2 / 4 / 3',
    '2 / 1 / 3 / 2',
];

interface PlayerNameContainerProps {
    active?: boolean
}

const PlayerNameContainer = styled.span<PlayerNameContainerProps>`
  border-radius: 1em;
  padding: 0.5em;
  
  ${props => props.active && `
  // box-shadow: 0 0 15px 4px var(--yellow);
  background-color: var(--yellow);
  `};
`

export const GameBoard = ({players, score}: GameState) => {
    const [activeIndex, setActiveIndex] = useState(0)
    // useInterval(() => {
    //     setActiveIndex((activeIndex + 1) % 4)
    // }, 2000)
    return (
        <div>
            <GameBoardContainer>
                {Object.values(players).map((player, index) =>
                    <GridItemContainer key={index} gridArea={clockWiseGridAreaList[index]}>
                        <PlayerContainer>
                            <PlayerCardContainer>
                                { player.playedCard && <PlayingCard rank={player.playedCard.rank}
                                             suit={player.playedCard.suit}/>

                                }
                                {!player.playedCard && <EmptyCard/>}
                                <PlayerNameContainer active={index === activeIndex}>
                                    {player.name} ({player.tricksTaken})
                                </PlayerNameContainer>
                            </PlayerCardContainer>
                        </PlayerContainer>
                    </GridItemContainer>)}
            </GameBoardContainer>
            <Score us={score.us} them={score.them}/>
        </div>
    )
};