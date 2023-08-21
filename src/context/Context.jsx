import React, { createContext, useState, useContext } from 'react';
import { restraunts } from '../data/restraunts';

// Create a context
const MyContext = createContext();

// Create a context provider component
export function MyContextProvider({ children }) {
  const [myState, setMyState] = useState(restraunts);

  const [myState2, setmyState2] = useState(restraunts);

  return (
    <MyContext.Provider value={{ myState, setMyState, myState2, setmyState2 }}>
      {children}
    </MyContext.Provider>
  );
}

// Custom hook to access the context
export function useMyContext() {
  return useContext(MyContext);
}
