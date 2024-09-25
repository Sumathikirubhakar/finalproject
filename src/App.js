import './App.css';
import Experience from './Components/Experience/Experience';
import Frontnav from './Components/Frontnav';
import Home from './Components/Homepage/Home';


function App() {
  return (
    <div className="App">
      < Frontnav />
      <Home />
      <Experience />
    </div>
  );
}

export default App;
