import './App.css';
import 'materialize-css/dist/css/materialize.min.css';

import React from 'react'
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';

import ItemsProvider from './Context';

import NavBar from './components/NavBar';
import Footer from './components/Footer';
import Cart from './components/Cart';
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';
import BadRequest from './components/BadRequest';

import Contacto from './components/Contacto';

function App() {
  return (
    <Router>
      <ItemsProvider>
        <div className="App">
          <NavBar></NavBar>
          <main className="Site">
            <Switch>
              <Route path='/' exact component={ItemListContainer}/>
              <Route path='/item/:id' exact component={ItemDetailContainer}/>
              <Route path='/category/:id' exact component={ItemListContainer}/>
              <Route path='/404' exact component={BadRequest}/>
              <Route path='/Contacto' exact component={Contacto}/>
              <Route path='/cart' exact component={Cart}/>
            </Switch>
          </main>
          <Footer></Footer>
        </div>
      </ItemsProvider>
    </Router>
  );
}

export default App;
