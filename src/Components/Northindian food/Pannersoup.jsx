import React from 'react'
import Footer from '../Footer/Footer'
import "./Pannersoup.css";

export default function Pannersoup() {
    return (
        <div>
            <div class="pannersoup10">
            <div class="grid-container">
                <div class="grid-item">
                    <img src="https://st2.depositphotos.com/44388702/44219/i/450/depositphotos_442199556-stock-photo-homemade-dosa-dhosa-masala-plain.jpg" alt="#" height="350" width="700" />
                </div>
                <div class="grid-item">
                    <h3>PANNER SOUP</h3>
                    <h4>₹120 /-</h4>
                    <ul className='panner'>
                        <li><input type="checkbox" /> GHEE DHOSA</li>
                        <li><input type="checkbox" /> MASAL DHOSA</li>
                        <li><input type="checkbox" /> PODI DHOSA</li>
                        <li><input type="checkbox" /> ONION DHOSA</li>
                    </ul>
                    <div className='panner1btn'>
                        <button className='btn btn-success'>Add to Cart</button>
                        <button className='btn btn-success'>Buy Now</button>

                    </div>
                </div>
            </div>
            </div>
            <Footer />
        </div>
    )
}
