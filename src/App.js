import logo from './logo.svg';
import './App.css';
import Movieview from './components/Movieview'
import Register from './components/Register';

function App() {
  return (
    <div className="App">
      <Movieview></Movieview>
      <Register/>
    </div>
  );
}

export default App;