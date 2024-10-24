import React from 'react'
import Footer from '../Footer/Footer'
import "./Methuvada.css"

export default function Methuvada() {
    return (
        <div>
            <div className='Methuvada11'>
                <div class="grid-container">
                    <div class="grid-item">
                        <img src="https://media.istockphoto.com/id/1262305920/photo/tea-time-snack-dal-vada-or-parippu-vada-or-paruppu-vadai-deep-fried-snacks-savory-food-from.jpg?s=612x612&w=0&k=20&c=Dxeb2eSaXCiumc_muijW3R-T7GBNnSxVuc0J0LS3DOo=" alt="#" height="350" width="700" />
                    </div>
                    <div class="grid-item">
                        <h3>VADAI</h3>
                        <h4>₹20 /-</h4>
                        <ul className='Paniyaram'>
                            <li><input type="checkbox" /> SWEET PANIYARAM</li>
                            <li><input type="checkbox" /> MILK PANIYARAM</li>
                            <li><input type="checkbox" /> KUZHLI PANIYARAM</li>
                            <li><input type="checkbox" /> WHEAT PANIYARAM</li>
                        </ul>
                        <div className='Methuvadabtn'>
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
