import React from 'react';
import './index.css';
import {store} from "./redux/redux-store";

import ReactDOM from "react-dom";
import App from "./App";
import {RootType} from "./redux/store";
import {StoreContext} from './StoreContext'

let rerenderEntireTree = (state:RootType) => {
    ReactDOM.render(
        <React.StrictMode>
            <StoreContext.Provider value={store}>
                <App />
            </StoreContext.Provider>

        </React.StrictMode>,
        document.getElementById('root')
    );
}


rerenderEntireTree(store.getState())

store.subscribe(()=>{
    let state=store.getState()
    rerenderEntireTree(state)})







