//react
import { createContext, RefObject, useContext } from 'react';

interface ScrollContextType {
  usersRef: RefObject<HTMLDivElement>;
  footerRef: RefObject<HTMLDivElement>;
}

export const ScrollContext = createContext<ScrollContextType | null>(null);

export const useScrollContext = () => {
  const context = useContext(ScrollContext);
  if (context === null) {
    throw new Error('useScrollContext must be used within a ScrollProvider');
  }
  return context;
};
