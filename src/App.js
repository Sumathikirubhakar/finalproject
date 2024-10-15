import { Navigate, Route, Router, Routes } from 'react-router-dom';
import './App.css';
import Frontnav from './Components/Frontnav';
import Home from './Components/Homepage/Home';
import Company from './Components/Comapy page/Company';
import Footer from './Components/Footer/Footer';


function App() {
  return (
    <div className="App">
       {/* <Router>  */}
       <Frontnav />
       
        <Routes>
          <Route path='/' element={<Navigate to={'/home'}/>}/>
          <Route path='/home' element={<Home/>}/>
          <Route path='/company' element={<Company/>}/>
        </Routes>

    </div>
  );
}

export default App;
