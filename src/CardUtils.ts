import {Card, Rank, Suit} from "./types/Card";

function arrayToMapOfValueToIndex(arr: (Rank | Suit)[]): any{
    return arr.map((val, index) => [val, index])
        .reduce((acc, [rank, index]) => ({...acc, [rank]: index}), {});
}

const rankOrder = arrayToMapOfValueToIndex(['A' , 'K' , 'Q' , 'J' , 10 , 9 , 8 , 7 , 6 , 5 , 4 , 3 , 2]);
const suitOrder = arrayToMapOfValueToIndex(['spades', 'hearts', 'clubs', 'diamonds']);
console.log(rankOrder);
console.log(suitOrder);

function handSortingFunction(a: Card, b: Card): number {
    let res;
    if(a.suit !== b.suit){
        res = suitOrder[b.suit] - suitOrder[a.suit]
    } else {
        res = rankOrder[b.rank] - rankOrder[a.rank]
    }
    console.log(a, b, res);

    return res;
}

export const sortHand = (cards: Card[]) => cards.sort(handSortingFunction);