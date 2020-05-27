import {game, GameModel} from "./GameModel";

export interface StoreModel {
    game: GameModel
}

const model: StoreModel = {
    game,
};

export default model;