import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import Game from './game/game.jsx';
import './style.css';

window.onload = () => {
  const div = document.getElementById('app');
  ReactDOM.render(React.createElement(Game), div);
};
