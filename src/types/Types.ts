import {Card} from "./Card";

export interface GameState {
    players: {[id: string]: Player}
    score: Scoring
}

export interface Scoring {
    us: TeamScore,
    them: TeamScore
}

interface TeamScore {
    tricks: number
    bid: number
    playerBiddingNil?: string
}

export interface Player {
    name: string
    id: string
    playedCard?: Card
    tricksTaken: number
}
