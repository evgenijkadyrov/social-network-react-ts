import React from 'react';
import './index.css';
import {addAnswer, addPost,  state, subscribe, updateNewMessageText, updateNewPost} from "./redux/state";

import ReactDOM from "react-dom";
import App from "./App";




 let rerenderEntireTree=()=>{
    ReactDOM.render(
        <React.StrictMode>
            <App state={state}
                 addPost={addPost}
                 addAnswer={addAnswer}
                 updateNewPost={updateNewPost}
                 updateNewMessageText={updateNewMessageText}/>
        </React.StrictMode>,
        document.getElementById('root')
    );
}


rerenderEntireTree()

subscribe(rerenderEntireTree)







