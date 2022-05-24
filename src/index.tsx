import React from 'react';
import ReactDOM from 'react-dom';
import 'normalize.css';
import './index.css';
import Cardapio from './pages/Cardapio';
import Inicio from 'pages/Inicio';
import Router from './routes';
const componenteAtual = window.location.pathname === '/' ? <Inicio></Inicio> : <Cardapio></Cardapio>;

ReactDOM.render(
  <React.StrictMode>
    <Router></Router>
  </React.StrictMode>,
  document.getElementById('root')
);
