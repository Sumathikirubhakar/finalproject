import { Route, Router, Routes } from 'react-router-dom';
import './App.css';
import Experience from './Components/Experience/Experience';
import Frontnav from './Components/Frontnav';
import Home from './Components/Homepage/Home';
import Company from './Components/Comapy page/Company';


function App() {
  return (
    <div className="App">
       {/* <Router>  */}
       <Frontnav />
      <Home />
      <Experience /> 
      {/* <Routes>
      {/* <Route path='/Frontnav' element={<Frontnav/>}/> */}
      {/* <Route path='/Home' element={<Home/>}/>
      <Route path='/Experience' element={<Experience/>}/>
        
        <Route path='/Company' element={<Company/>}/>
      </Routes> */}
      {/* </Router>  */}
    </div>
  );
}

export default App;
