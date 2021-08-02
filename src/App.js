import 'animate.css'
import logoCoder from './coderhouse-logo.png';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <a
          className="App-link"
          href="https://plataforma.coderhouse.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={logoCoder} className="animate__animated App-logo animate__repeat-3" alt="logo" />
        </a>
        <h3>Camada 19720</h3>
        <h4>Juan Pablo Toniolo</h4>
      </header>
    </div>
  );
}

export default App;
