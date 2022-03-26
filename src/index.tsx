import React from 'react';
import './index.css';
import {store} from "./redux/redux-store";

import ReactDOM from "react-dom";
import App from "./App";
import {RootType} from "./redux/store";
import {Provider, StoreContext} from './StoreContext'

let rerenderEntireTree = (state: RootType) => {
    ReactDOM.render(
        <Provider store={store}>
            <App/>
        </Provider>,
        document.getElementById('root')
    );
}


rerenderEntireTree(store.getState())

store.subscribe(() => {
    let state = store.getState()
    rerenderEntireTree(state)
})







