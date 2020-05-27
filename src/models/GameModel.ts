import {Player, Scoring} from "../types/Types";
import {Card} from "../types/Card";
import {action, Action, Thunk, thunk} from "easy-peasy";
import {remove} from "lodash-es";
import {GameClient} from "../hooks/GameClient";


export interface GameModel {
    id?: string
    setId: Action<GameModel, string>
    players: {[id: string]: Player}
    addPlayer: Action<GameModel, Player>

    scoring: Scoring
    setBid: Action<GameModel, {team: 'us'|'them', bid: number}>
    winTrick: Action<GameModel, {team: 'us'|'them'}>

    hand: Card[]
    dealHand: Action<GameModel, Card[]>
    playCard: Thunk<GameModel, Card>
    removeFromHand: Action<GameModel, Card>
}
const client = new GameClient();

export const game: GameModel = {
    setId: action((state, id) => {
        state.id = id
    }),
    players: {},
    addPlayer: action((state, player) => {
        state.players[player.id] = player;
    }),
    scoring: {
        us: {
            tricks: 0,
            bid: 0
        },
        them: {
            tricks: 0,
            bid: 0
        }
    },
    setBid: action((state, {team, bid}) => {
        state.scoring[team].bid = bid;
    }),
    winTrick: action((state, {team}) => {
        state.scoring[team].tricks++;
    }),
    hand: [],
    dealHand: action((state, cards) => {
        state.hand = cards;
    }),
    removeFromHand: action((state, card) => {
        remove(state.hand, card);
        if(state.id){
            state.players[state.id].playedCard = card;
        }
    }),
    playCard: thunk(async (actions, payload) => {
        const result = await client.ping(payload);
        console.log(result);
        actions.removeFromHand(payload);
    })
};