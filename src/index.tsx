import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';


let posts = [
    {id: 1, message: 'Hey, i\'m new post', likesCount: 9},
    {id: 2, message: 'How are you?', likesCount: 15},
    {id: 3, message: 'You win lottery', likesCount: 55}
]
let dialogs = [
    {id: 1, name: 'Dimych'},
    {id: 2, name: 'Victor'},
    {id: 3, name: 'Sveta'},
    {id: 4, name: 'Misha'},
    {id: 5, name: 'Maks'},
];
let messages = [
    {id: 1, message: 'How are you?'},
    {id: 2, message: 'How long you study JS'},
    {id: 3, message: 'Doyou like it?'}
]
ReactDOM.render(
  <React.StrictMode>
    <App posts={posts} dialogs={dialogs} messages={messages}/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();





