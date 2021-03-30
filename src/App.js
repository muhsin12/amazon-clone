import logo from './logo.svg';
import './App.css';
import Header from './Header';
import Cart from './Cart';
import Home from './Home';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import styled from 'styled-components';
import { useState, useEffect } from 'react';
import { db } from './firebase';


function App() {

  const [cartItems, setcartItems] = useState([]);

  function getCartItems() {
    db.collection('cartItems').onSnapshot((snapshot) => {
      let tempItems = [];
      tempItems = snapshot.docs.map((doc) => {
        return {
          id: doc.id,
          product: doc.data()
        }
      });
      setcartItems(tempItems);
    });
  };
  useEffect(() => {
    getCartItems();
  }, [])


  return (
    <Router>
      <Container>
        <Header />
        <Switch>
          <Route path="/cart">
            <Cart appCart={cartItems}/>
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </Container>
    </Router>
  );
}

export default App;
const Container = styled.div`
background-color: #EAEDED;
`