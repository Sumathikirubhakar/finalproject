import { Navigate, Route, Routes } from 'react-router-dom';
import './App.css';
import Frontnav from './Components/Frontnav';
import Home from './Components/Homepage/Home';
import Company from './Components/Comapypage/Company';
// import Footer from './Components/Footer/Footer';
import Sweetpage from './Components/Sweet/Sweetpage';
import Restaurant from './Components/Restaurant/Restaurant';
import Retail from './Components/Retail/Retail';
import Southindianfood from './Components/Southindianfood/Southindianfood';
import Northindianfood from './Components/Northindian food/Northindianfood';
import Dhosa from './Components/Southindianfood/Dhosa';
import Login from './Components/Login/Login';
import Idlyvada from './Components/Southindianfood/Idlyvada';
import Paniyaram from './Components/Southindianfood/Paniyaram';
import Methuvada from './Components/Southindianfood/Methuvada';
import Contact from './Components/Contactus/Contact';
import Carrers from './Components/Carrers/Carrers';
import Pannersoup from './Components/Northindian food/Pannersoup';
import Admindashboard from './Components/Admindashborad/Admindashboard';
import Kerelafoods from './Components/Kerelafoods/kerelafoods';
import Brandstory from './Components/Brandstory/Brandstory';
import Coe from './Components/Centerofexcellence/Coe';
import Media from './Components/Media/Media';
import TermsConditions from './Components/Terms&Conditions/Terms&Conditions';
import Cookie from './Components/Cookie/Cookie';
import Tradecopyrights from './Components/Tradecopyrights/Tradecopyrights';
import Privacypolicy from './Components/Privacypolicy/Privacypolicy';
import Karnatafoods from './Components/Karnatakafoods/Karnatafoods';





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
          <Route path='/Dhosa' element={<Dhosa/>} />
          <Route path='/Login' element={<Login/>} />
          <Route path='/Idlyvada' element={<Idlyvada/>} />
          <Route path='/Paniyaram' element={<Paniyaram/>} />
          <Route path='/Methuvada' element={<Methuvada/>} />
          <Route path='/Contact' element={<Contact/>} />
          <Route path='/Carrers' element={<Carrers/>} />
          <Route path='/Pannersoup' element={<Pannersoup/>} />
          <Route path='/Admindashboard' element={<Admindashboard/>} />
          <Route path='/Kerelafoods' element={<Kerelafoods/>} />
          <Route path='/Brandstory' element={<Brandstory/>} />
          <Route path='/Coe' element={<Coe/>} />
          <Route path='/Media' element={<Media/>} />
          <Route path='/TermsConditions' element={<TermsConditions/>} />
          <Route path='/Cookie' element={<Cookie/>} />
          <Route path='/Tradecopyrights' element={<Tradecopyrights/>} />
          <Route path='/Privacypolicy' element={<Privacypolicy/>} />
          <Route path='/Karnatakafoods' element={<Karnatafoods/>} />

        
          
          


        </Routes>
        {/* <Footer/> */}
        {/* </Router> */}

    </div>
  );
}

export default App;
