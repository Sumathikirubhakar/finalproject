import { Navigate, Route, Router, Routes } from 'react-router-dom';
import './App.css';
import Frontnav from './Components/Frontnav';
import Home from './Components/Homepage/Home';
import Company from './Components/Comapy page/Company';
// import Footer from './Components/Footer/Footer';
import Sweetpage from './Components/Sweet/Sweetpage';
import Restaurant from './Components/Restaurant/Restaurant';
import Retail from './Components/Retail/Retail';
import Southindianfood from './Components/Southindianfood/Southindianfood';
import Northindianfood from './Components/Northindian food/Northindianfood';


function App() {
  return (
    <div className="App">
       {/* <Router>  */}
       <Frontnav />
       {/* <Router> */}
        <Routes>
          <Route path='/' element={<Navigate to={'/home'}/>}/>
          <Route path='/home' element={<Home/>}/>
          <Route path='/company' element={<Company/>}/>
          <Route path='/sweet' element={<Sweetpage/>}/>
          <Route path='/Restaurant' element={<Restaurant/>}/>
          <Route path='/Retail' element={<Retail/>}/>
          <Route path='/Southindianfood' element={<Southindianfood/>}/>
          <Route path='/Northindianfood' element={<Northindianfood />} />


        </Routes>
        {/* <Footer/> */}
        {/* </Router> */}

    </div>
  );
}

export default App;
