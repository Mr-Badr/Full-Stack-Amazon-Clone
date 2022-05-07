import React from 'react';
import './App.css';
import Header from './Header';
import Home from './Home';
//TODO: import things here, but sheck first in youtube commanters for Router Updates
// TODO: go to 01:34:46 and install Routers
// TODO: go to 01:50:20 and install what he said

// we will use react context api soon (Redux)
// he explained the use of Redux at 02:01:10

import Checkout from './Checkout'


function App() {
  return (
    <div className="app">
      <Header />
      <Home />
    </div>
  );
}

export default App;
