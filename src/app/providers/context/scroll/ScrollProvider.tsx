// react
import { FC, useRef } from 'react';
//context
import { ScrollContext } from './ScrollContext';

export const ScrollProvider: FC<{ children: React.ReactNode }> = ({
  children
}) => {
  const usersRef = useRef<HTMLDivElement>(null);
  const footerRef = useRef<HTMLDivElement>(null);

  return (
    <ScrollContext.Provider value={{ usersRef, footerRef }}>
      {children}
    </ScrollContext.Provider>
  );
};
