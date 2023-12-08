import React from 'react';
import {DIContainer} from 'core/di/api/DIContainer';
import {ReactNode, createContext} from 'react';

interface ContextProvided {
  container: DIContainer;
}

export const Context = createContext<ContextProvided>({
  container: {
    get: () => {
      throw new Error('no container available');
    },
  },
});

interface ProviderProps {
  children: ReactNode;
  container: DIContainer;
}

export const Provider = (props: ProviderProps) => {
  return (
    <Context.Provider value={{container: props.container}}>
      {props.children}
    </Context.Provider>
  );
};
