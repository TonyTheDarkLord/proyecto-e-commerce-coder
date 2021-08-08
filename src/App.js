import 'materialize-css/dist/css/materialize.min.css';
import './App.css';
import "./components/Footer";
import "./components/NavBar";
import NavBar from './components/NavBar'
import Footer from './components/Footer'
//import Header from "./components/Header";

function App() {
  return (
    <div className="App Site">
     <NavBar></NavBar>
     <main className="Site"></main>
     <Footer></Footer>
    </div>
  );
}

export default App;
