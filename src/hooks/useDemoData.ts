import {useStoreActions} from "../store";
import {GameState} from "../types/Types";
import {useEffect} from "react";
import {getShuffledHand} from "../CardUtils";


export const useDemoData = () => {

    const addPlayer = useStoreActions(actions => actions.game.addPlayer);
    const dealHand = useStoreActions(actions => actions.game.dealHand);
    const setId = useStoreActions(actions => actions.game.setId);

    const demoState: GameState = {
        players: {
            '1': {id: '1', name: 'Penny', tricksTaken: 0},
            '2': {id: '2', name: 'Donnie', tricksTaken: 0},
            '3': {id: '3', name: 'Derrick', tricksTaken: 0},
            '4': {id: '4', name: 'Cameron', tricksTaken: 0},
        },
        score: {
            us: {
                tricks: 3,
                bid: 5
            },
            them: {
                tricks: 2,
                bid: 8
            }
        }
    };

    useEffect(() => {
        Object.values(demoState.players).forEach(addPlayer);
        setId("1");
        dealHand(getShuffledHand(13));
    }, []);
};
