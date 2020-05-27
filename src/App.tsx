import {StoreProvider} from 'easy-peasy';
import React from 'react';
import {Game} from "./components/Game";
import store from "./store";

function App() {

    return (
        <StoreProvider store={store}>
            <div className="App">
                <Game/>
            </div>
        </StoreProvider>
    );
}

export default App;
