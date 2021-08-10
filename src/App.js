import 'materialize-css/dist/css/materialize.min.css';
import React, { useEffect } from "react";
import M from 'materialize-css'; 
import './App.css';
import NavBar from './components/NavBar'
import ItemListContainer from './components/ItemListContainer'
import Footer from './components/Footer'

function App() {

  useEffect(() => {
    let dropdowns = document.querySelectorAll(".dropdown-trigger");
    let options = {
      inDuration: 300,
      outDuration: 700,
      hover: true,
      coverTrigger: false,
      constrainWidth: false
    };
  M.Dropdown.init(dropdowns, options);
  }, []);

  return (
    <div className="App">
     <NavBar></NavBar>
     <main className="Site">
       <ItemListContainer greeting={"Bienvenido a mi e-commerce"}/>
     </main>
     <Footer></Footer>
    </div>
  );
}

export default App;
