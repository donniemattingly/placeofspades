import {Card, Rank, Suit} from "./types/Card";
import {shuffle} from "lodash-es";

const suits: Suit[] = ['spades', 'diamonds', 'clubs', 'hearts'];
const ranks: Rank[] = ['A', 'K', 'Q', 'J', 10, 9, 8, 7, 6, 5, 4, 3, 2];

export const deck = suits.flatMap((s) => ranks.map(r => ({rank: r, suit: s})));

export const getShuffledHand = (size: number) => shuffle(deck).slice(0, size);

function arrayToMapOfValueToIndex(arr: (Rank | Suit)[]): any{
    return arr.map((val, index) => [val, index])
        .reduce((acc, [rank, index]) => ({...acc, [rank]: index}), {});
}

const rankOrder = arrayToMapOfValueToIndex(['A' , 'K' , 'Q' , 'J' , 10 , 9 , 8 , 7 , 6 , 5 , 4 , 3 , 2]);
const suitOrder = arrayToMapOfValueToIndex(['spades', 'hearts', 'clubs', 'diamonds']);


function handSortingFunction(a: Card, b: Card): number {
    let res;
    if(a.suit !== b.suit){
        res = suitOrder[b.suit] - suitOrder[a.suit]
    } else {
        res = rankOrder[b.rank] - rankOrder[a.rank]
    }
    return res;
}

export const sortHand = (cards: Card[]) => cards.sort(handSortingFunction);