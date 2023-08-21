// import logo from './logo.svg';
import './App.css';
// import { RestCard } from './components/RestCard';
// import { Product } from './components/Product';
import { Home } from './components/Home';

import { BrowserRouter, Routes, Route } from "react-router-dom";
import { TabOptions } from './components/TabOptions';
import {  MyContextProvider } from './context/Context';

function App() {
  return (
    <div className="App">
      <MyContextProvider>
      <BrowserRouter>
      <Routes>
          <Route exact path="/" element={<Home />}/>
          <Route exact path="/delivery/:state/" element={<TabOptions />} />
          <Route exact path="/nightlife/:state/" element={<TabOptions />} />
          <Route exact path="/dining/:state/" element={<TabOptions/> } />
        
      </Routes>
    </BrowserRouter>
    </MyContextProvider>


    {/* <TabOptions /> */}
    {/* 
    <Home /> */}

    </div>
  );
}

export default App;
