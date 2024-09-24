import React from 'react'
import './Frontnav.css'

export default function Frontnav() {
    return (
        <div>
            <div class="a">
                <p class="welcome">Welcome to SK Foods and Snacks...! <span><br />Feel and Smell Good.</span></p>
            </div>
            <div class="b">
                <nav class="lists">
                    <img src="sk logo.png" className='rounded-circle' alt="no image" height={100} width={100} />
                    <ul class="menu">
                        <li class="items"><a href="home">HOME</a></li>
                        <li class="items"><a href="profile">COMPANY PROFILE</a></li>
                        <li class="items"><a href="contact">CONTACT Us</a></li>
                        <li class="items"><a href="carrers">CARRERS</a></li>
                    </ul>
                    <button type="button" class="btn btn-primary">Order-Online</button>
                </nav>
                <div class="food position-relative top-0">
                    <img src="restaurant.png " alt="no image" height={500} width={1700} />
                </div>
                <div class="contents">
                    <h1 class="d">Welcome to SK Foods and Snacks: Feels the taste</h1>
                    <p></p>
                </div>
            </div>

        </div>
    )
}
