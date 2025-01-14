import React from 'react';
import './Footer.css'
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <div className='footer'>
        <div className="row">
        <div className="col-md-3">
          <h5>PRODUCTS</h5>
          <Link to={'/sweet'}>Sweets</Link>
          <Link to={'/Restaurant'}>Restaurant</Link>
          <Link to={'/Retail'}>Retail</Link>

        </div>
        <div className="col-md-3">
          <h5>QUICK LINKS</h5>
          <Link to={'/home'}>Home</Link>
          <Link to={'/Brandstory'}>Brand Story</Link>
          <Link to={'/Coe'}>Center Of Excellence</Link>
          <Link to={'/media'}>Media</Link>
          <Link to={'/Contact'}>Contact US</Link>

        </div>
        <div className="col-md-3">
          <h5>LEGAL</h5>
          <Link to={'/TermsConditions'}>Terms & Conditions</Link>
          <Link to={'/Cookie'}>Cookie Ploicy</Link>
          <Link to={'/Tradecopyrights'}>Trademark & Copyright Policy</Link>
          <Link to={'/Privacypolicy'}>Privacy Policy</Link>
        </div>
        <div className="col-md-3">
          <h5>Address</h5>
          <Link>No: 53, Ramarkovil 3rd st, <br />
            South phase, Udumalpet - 642 128</Link>

          <h5>Phone</h5>
          <Link>+91-44-42333333 / +91-99434 46945</Link>

          <h5>Email</h5>
          <Link>care@skfoods.com</Link>

          <h5>Timing</h5>
          <Link>Monday To Sunday <br />
            7:00 AM to 10:00 PM</Link>
        </div>
      </div>
    </div>
  )
}
