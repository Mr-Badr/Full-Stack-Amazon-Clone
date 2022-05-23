import "./App.css";
import Header from "./Header";
import Home from "./Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Checkout from "./Checkout";
import Login from "./Login";
import { useEffect } from "react";
import { auth } from "./firebase";
import { useStateValue } from "./StateProvider";

function App() {
  const [{ user }, dispatch] = useStateValue();

  useEffect(() => {
    // will only run once when the app component loads ...
    const unsubscribe = auth.onAuthStateChanged((user) => { //console.log('The user >>>> ',user)
      if (user) {
        // the user just logged in / the user was logged in
        dispatch({
          type: "SET_USER",
          user: user,
        });
      } else {
        // the user is logged out
        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
    });
    return () => {
      unsubscribe();
    };
  },[]);

  return (
    <div className='app'>
      <Router >
      
        <Routes>
          <Route path='/login' element={[<Login />]}/>
          <Route path='/checkout' element={[<Header />, <Checkout />]}/>
          <Route path='/' element={[<Header />, <Home />]} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
