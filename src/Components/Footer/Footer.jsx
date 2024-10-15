import React from 'react';
import './Footer.css'

export default function Footer() {
  return (
    <div className='footer'>
        <div className="row">
        <div className="col-md-3">
          <h5>PRODUCTS</h5>
          <p>Sweets</p>
          <p>Restaurant</p>
          <p>Retail</p>

        </div>
        <div className="col-md-3">
          <h5>QUICK LINKS</h5>
          <p>Home</p>
          <p>Brand Story</p>
          <p>Center Of Excellence</p>
          <p>Media</p>
          <p>Contact US</p>

        </div>
        <div className="col-md-3">
          <h5>LEGAL</h5>
          <p>Terms & Conditions</p>
          <p>Cookie Ploicy</p>
          <p>Trademark & Copyright Policy</p>
          <p>Privacy Policy</p>
        </div>
        <div className="col-md-3">
          <h5>Address</h5>
          <p>No: 53, Ramarkovil 3rd st, <br />
            South phase, Udumalpet - 642 128</p>

          <h5>Phone</h5>
          <p>+91-44-42333333 / +91-99434 46945</p>

          <h5>Email</h5>
          <p>care@skfoods.com</p>

          <h5>Timing</h5>
          <p>Monday To Sunday <br />
            7:00 AM to 10:00 PM</p>
        </div>
      </div>
    </div>
  )
}
