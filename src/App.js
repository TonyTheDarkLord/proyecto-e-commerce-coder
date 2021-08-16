import './App.css';
import 'materialize-css/dist/css/materialize.min.css';

import NavBar from './components/NavBar';
import ItemList from "./components/ItemList";
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
     <NavBar></NavBar>
     <main className="Site">
       <h3>Productos</h3>
       <ItemList/>
     </main>
     <Footer></Footer>
    </div>
  );
}

export default App;
