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
        <img src="eateatinghall.png" alt="no image" height={500} width={1550}/>
      </div>

      <div class="tables">
        <table>
      <thead>
        <tr>
          <th>PRODUCTS</th>
          <th>QUICK LINKS</th>
          <th>LEGAL</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Sweets</td>
          <td>Home</td>
          <td>Terms & Conditions</td>
        </tr>
        <tr>
          <td>Restaurant</td>
          <td>Brand Story</td>
          <td>Cookie Ploicy</td>
        </tr>
        <tr>
          <td>Retail</td>
          <td>Center Of Excellence</td>
          <td>Trademark & Copyright Policy</td>
        </tr>
        <tr>
          <td></td>
          <td>Media</td>
          <td>Privacy Policy</td>
        </tr>
        <tr>
          <td></td>
          <td>Contact US</td>
          <td></td>
        </tr>
      </tbody>
        </table>
      </div>
    </div>
  )
}
