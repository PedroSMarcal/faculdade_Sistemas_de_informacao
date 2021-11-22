// importa biblioteca react e react-do
import React from 'react';
import ReactDOM from 'react-dom';
//b importa o primeiro componente React chamado App
import App from './App';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// o que o componente App será exibido no elemento HTML cujo id é root