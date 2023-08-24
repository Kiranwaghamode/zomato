import React, { createContext, useState, useContext } from 'react';
import { restraunts } from '../data/restraunts';
import { diningData } from '../data/diningData';
import { nightLife } from '../data/nightLife';

// Create a context
const MyContext = createContext();

// Create a context provider component
export function MyContextProvider({ children }) {
  const [myState, setMyState] = useState(restraunts);

  const [myState2, setmyState2] = useState(restraunts);

  const [newDining, setnewDining] = useState(diningData);

  const [newNightlife, setnewNightlife] = useState(nightLife);



  const [resData, setresData] = useState([]);

  const [resId, setresId] = useState();

  const [hotel, sethotel] = useState({});





  return (
    <MyContext.Provider value={{ myState,hotel, sethotel,  setMyState, myState2 , resId, setresId, resData, setresData,  setmyState2, newDining, setnewDining, newNightlife, setnewNightlife }}>
      {children}
    </MyContext.Provider>
  );
}

// Custom hook to access the context
export function useMyContext() {
  return useContext(MyContext);
}
