//react
import React from 'react';
import ReactDOM from 'react-dom/client';
//app
import { App } from './app/App';
//styles
import './index.scss';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
