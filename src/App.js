import logo from './logo.svg';
import './App.css';
import Movieview from './components/Movieview'
import Register from './components/Register';
import Login from './components/Login'

function App() {
  return (
    <div className="App">
      <Movieview></Movieview>
      <Login/>
      <Register/>
    </div>
  );
}

export default App;