import React from 'react';
import './index.css';
import {store} from "./redux/redux-store";
import ReactDOM from "react-dom";
import App from "./App";
import {Provider} from "react-redux";
import {BrowserRouter} from "react-router-dom";


let rerenderEntireTree = () => {
       ReactDOM.render(
           <React.StrictMode>
        <BrowserRouter>
            <Provider store={store}>
                <App/>
            </Provider>
        </BrowserRouter>
           </React.StrictMode>,
        document.getElementById('root')
    );
}


rerenderEntireTree()

store.subscribe(() => {

    rerenderEntireTree()
})







