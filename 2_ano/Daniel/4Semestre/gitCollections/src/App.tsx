import React from 'react';
import {BrowserRouter} from 'react-router-dom'
import {Routes} from './routes'
import { GlobalStyle } from './style/global';

// Criar um componente em react funcional
// O React.FC é uma função que gera uma Function Component
//fragmento de codigo
const App: React.FC = () => {
  return (
    <>
    {/* aqui definiremos o SPA(Simgle Page componet)*/}
    <BrowserRouter>
      <Routes/>
    </BrowserRouter>
    <GlobalStyle/>
    </>
  );
}

export default App;
