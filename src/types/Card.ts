export type Rank =  'A' | 'K' | 'Q' | 'J' | 10 | 9 | 8 | 7 | 6 | 5 | 4 | 3 | 2;
export type Suit = 'clubs' | 'diamonds' | 'hearts' | 'spades';

export interface Card {
    rank: Rank;
    suit: Suit;
}