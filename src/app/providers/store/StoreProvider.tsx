//react redux
import { FC, ReactNode } from 'react';
import { Provider } from 'react-redux';
//config store
import { createStore } from '@/app/config/store/createStore';

interface StoreProviderProps {
  children: ReactNode;
}

export const StoreProvider: FC<StoreProviderProps> = ({ children }) => {
  const store = createStore();

  return <Provider store={store}>{children}</Provider>;
};
