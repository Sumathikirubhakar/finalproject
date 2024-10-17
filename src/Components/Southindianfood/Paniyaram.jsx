import React from 'react'
import Footer from '../Footer/Footer'
import "./Paniyaram.css"

export default function Paniyaram() {
    return (
        <div>
            <div className='Paniyaram11'>
                <div class="grid-container">
                    <div class="grid-item">
                        <img src="https://t3.ftcdn.net/jpg/04/47/24/76/360_F_447247650_fATbfFFKbgr2VTdmRMRiBakCCQLEK1Dl.jpg" alt="#" height="350" width="700" />
                    </div>
                    <div class="grid-item">
                        <h3>PANIYARAM</h3>
                        <h4>₹40 /-</h4>
                        <ul className='Paniyaram'>
                            <li><input type="checkbox" /> SWEET PANIYARAM</li>
                            <li><input type="checkbox" /> MILK PANIYARAM</li>
                            <li><input type="checkbox" /> KUZHLI PANIYARAM</li>
                            <li><input type="checkbox" /> WHEAT PANIYARAM</li>
                        </ul>
                        <div className='Paniyarambtn'>
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
