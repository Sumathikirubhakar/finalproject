import React from 'react'
import Footer from '../Footer/Footer'
import "./Dhosa.css";


export default function Dhosa() {
    return (
        <div className='Dhosa11'>
            <div class="grid-container">
                <div class="grid-item">
                    <img src="https://st2.depositphotos.com/44388702/44219/i/450/depositphotos_442199556-stock-photo-homemade-dosa-dhosa-masala-plain.jpg" alt="#" height="350" width="700" />
                </div>
                <div class="grid-item">
                    <h3>DHOSA</h3>
                    <h4>₹50 /-</h4>
                    <ul className='Dhosa'>
                        <li><input type="checkbox" /> GHEE DHOSA</li>
                        <li><input type="checkbox" /> MASAL DHOSA</li>
                        <li><input type="checkbox" /> PODI DHOSA</li>
                        <li><input type="checkbox" /> ONION DHOSA</li>
                    </ul>
                    <div className='dosabtn'>
                        <button className='btn btn-success'>Add to Cart</button>
                        <button className='btn btn-success'>Buy Now</button>

                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

