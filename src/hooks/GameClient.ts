import {Channel, Socket} from "phoenix";


interface GameAction {

}

type Dispatch = (action: GameAction) => void;
let channel;


export class GameClient {

    socket: Socket;
    channel: Channel;

    constructor() {
        this.socket = new Socket("ws://localhost:4000/socket/websocket?vsn=2.0");
        this.channel = this.socket.channel('table:lobby', {});
        this.socket.connect();
        this.channel.join()
            .receive('ok', resp => {
                console.log('Joined successfully', resp)
            })
            .receive('error', resp => {
                console.log('Unable to join', resp)
            });
    }

    async ping(action: GameAction) {
        return new Promise<any>((resolve, reject) => {
            this.channel.push('ping', action)
                .receive('ok', resolve)
                .receive('error', reject);
        });
    }
}