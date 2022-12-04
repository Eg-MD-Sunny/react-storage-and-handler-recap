import './App.css';
import Cosmetics from './components/Cosmetics/Cosmetics';
import Function from './components/Functional/Function';
import Shoes from './components/Shoes/Shoes';

function App() {
  return (
    <div className="App">
      <Cosmetics></Cosmetics>
      <Shoes></Shoes>
      <Function></Function>
    </div>
  );
}

export default App;
