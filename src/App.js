import './App.css';
import 'materialize-css/dist/css/materialize.min.css';

import React from 'react'
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';
import BadRequest from './components/BadRequest';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
        <NavBar></NavBar>
        <main className="Site">
          <Switch>
            <Route path='/' exact component={ItemListContainer}/>
            <Route path='/item/:id' exact component={ItemDetailContainer}/>
            <Route path='/404' exact component={BadRequest}/>
          </Switch>
        </main>
        <Footer></Footer>
      </div>
    </Router>
  );
}

export default App;
