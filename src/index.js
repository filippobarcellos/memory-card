import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { MemoryProvider } from './context/useMemory';
import GlobalStyle from './globalStyle';

ReactDOM.render(
  <React.StrictMode>
    <MemoryProvider>
      <App />
      <GlobalStyle />
    </MemoryProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
