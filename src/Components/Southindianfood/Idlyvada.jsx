import React from 'react'
import Footer from '../Footer/Footer'
import "./Idlyvada.css"

export default function Idlyvada() {
    return (
        <div>
            <div className='Idlyvada11'>
                <div class="grid-container">
                    <div class="grid-item">
                        <img src="https://i.pinimg.com/736x/24/7d/63/247d63ebed90c69c479dc8095ebd1457.jpg" alt="#" height="350" width="700" />
                    </div>
                    <div class="grid-item">
                        <h3>IDLY & VADA</h3>
                        <h4>₹60 /-</h4>
                        <ul className='Idlyvada'>
                            <li><input type="checkbox" /> IDLY & VADA</li>
                            <li><input type="checkbox" /> IDLY & MASALVADA</li>
                            <li><input type="checkbox" /> IDLY & SAMBARVADA</li>
                            <li><input type="checkbox" /> IDLY & CURDVADA</li>
                        </ul>
                        <div className='Idlyvadabtn'>
                            <button className='btn btn-success'>Add to Cart</button>
                            <button className='btn btn-success'>Buy Now</button>
                        </div>
                    </div>
                </div>
                <Footer />
            </div>
        </div>
    )
}
