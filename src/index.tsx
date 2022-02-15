import React from 'react';
import './index.css';
import {store} from "./redux/state";

import ReactDOM from "react-dom";
import App from "./App";




 let rerenderEntireTree=()=>{
    ReactDOM.render(
        <React.StrictMode>
            <App state={store.getState()}
                 addPost={store.addPost.bind(store)}
                 addAnswer={store.addAnswer.bind(store)}
                 updateNewPost={store.updateNewPost.bind(store)}
                 updateNewMessageText={store.updateNewMessageText.bind(store)}/>
        </React.StrictMode>,
        document.getElementById('root')
    );
}


rerenderEntireTree()

store.subscribe(rerenderEntireTree)







