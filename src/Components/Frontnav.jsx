import React from 'react'
import './Frontnav.css'
import {Link} from 'react-router-dom'

export default function Frontnav() {
    return (
        <div className='main-nav'>
            <div class="a">
                <p class="welcome">Welcome to SK Foods and Snacks...! <span><br />Tasting in to happiness 😎🌴🍹</span></p>
            </div>
            <div class="b">
                <nav class="lists">
                    <img src="sk logo.png" className='rounded-circle' alt="no image" height={70} width={80} />
                    <ul class="menu">
                        <li class="items"><a href="home">HOME</a></li>
                        <li class="items"><Link to='/Company'>COMPANY PROFILE</Link></li>
                        <li class="items"><a href="contact">CONTACT Us</a></li>
                        <li class="items"><a href="carrers">CARRERS</a></li>
                    </ul>
                    <button type="button" className="btn btn-success"><Link to='/Login'>Log-In</Link></button>
                    <button type="button" className="btn btn-success">Order-Online</button>
                </nav>
                
            </div>            
        </div>
    )
}
