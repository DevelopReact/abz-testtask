//react
import React from 'react';
import ReactDOM from 'react-dom/client';
//app
import { App } from '@/app/App.tsx';
//providers
import { StoreProvider } from './app/providers/store';
//styles
import './index.scss';
import { ScrollProvider } from './app/providers/context/scroll/ScrollProvider';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ScrollProvider>
      <StoreProvider>
        <App />
      </StoreProvider>
    </ScrollProvider>
  </React.StrictMode>
);
