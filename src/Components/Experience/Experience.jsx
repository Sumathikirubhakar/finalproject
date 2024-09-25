import React from 'react'
import './Experience.css'

export default function Experience() {
  return (
    <div>
      <div class="contents1">
        <h1>Feels The Taste.....!!!</h1>
        <p class="theory">SK Foods and Snacks can tasting helps people understand the sensory qualities of food and beverages, which can help improve food quality and consumer satisfaction.</p>
      </div>
      <div class="eatingplace">
        <img src="eateatinghall.png" alt="no image" height={500} width={1550} />
      </div>

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
          <p>No: 53, Ambattur Industrial Estate, 3rd st, <br />
            South phase, Ambattur, Chennai - 600058</p>

          <h5>Phone</h5>
          <p>+91-44-42333333 / +91-44-40999999</p>

          <h5>Email</h5>
          <p>care@aabsweets.com</p>

          <h5>Timing</h5>
          <p>Monday To Sunday <br />
            7:00 AM to 10:00 PM</p>
        </div>
      </div>
    </div>
  )
}
