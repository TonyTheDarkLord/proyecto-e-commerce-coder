import './App.css';
import 'materialize-css/dist/css/materialize.min.css';

import React from 'react'
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import ItemListContainer from './components/ItemListContainer';

function App() {
  return (
    <div className="App">
     <NavBar></NavBar>
     <main className="Site">
       <h3>Productos</h3>
       <ItemListContainer/>
     </main>
     <Footer></Footer>
    </div>
  );
}

export default App;
