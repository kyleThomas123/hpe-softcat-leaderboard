import logo from './logo.svg';
import Header from './components/Header/Header';
import { Grommet } from 'grommet';
import { hpe } from 'grommet-theme-hpe';

function App() {
  return (
    <Grommet theme={hpe}>
      <Header>
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
      </Header>
    </Grommet>
  );
}

export default App;
