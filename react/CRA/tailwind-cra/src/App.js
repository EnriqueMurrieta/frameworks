import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <button class="rounded-none ...">Save Changes</button>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <button class="bg-indigo-500 ...">
          Save changes
        </button>
      </header>
    </div>
  );
}

export default App;
