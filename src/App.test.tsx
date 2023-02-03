import React from 'react';
import { render, screen } from '@testing-library/react';
import {App} from './App';

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
/*
test('renders learn react link', () => {
  render(<App posts={posts} dialogs={dialogs} messages={messages} />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
*/
