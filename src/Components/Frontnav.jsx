import React, { useEffect, useState } from 'react'
import './Frontnav.css'
import { Link, useNavigate } from 'react-router-dom'
import { useCart } from 'react-use-cart';

export default function Frontnav() {

    const navi = useNavigate()


    const [login, setLogin] = useState(false);

    useEffect(() => {
        const log = localStorage.getItem("isLogedin")

        if (log) {
            setLogin(true)
        }
        else {
            setLogin(false)
        }
    })

    const {items} = useCart() 
    return (
        <div className='main-nav'>
            <div class="a">
                <p class="welcome">Welcome to SK Foods and Snacks...! <span><br />Tasting in to happiness 😎🌴🍹</span></p>
            </div>
            <div class="b">
                <nav class="lists">
                    <img src="sk logo.png" className='rounded-circle' alt="noimage" height={70} width={80} />
                    <ul class="menu">
                        <li class="items"><a href="home">HOME</a></li>
                        <li class="items"><Link to='/Company'>COMPANY PROFILE</Link></li>
                        <li class="items"><a href="contact">CONTACT Us</a></li>
                        <li class="items"><a href="carrers">CARRERS</a></li>
                    </ul>
                    {
                        login ? (
                            <span className='d-flex gap-3'>

                                <button type="button" className="btn btn-success "
                                    onClick={() => {
                                        setLogin(false)
                                        localStorage.clear();
                                    }}
                                >Log-out</button>
                                <button type="button" className="btn btn-success "
                                    onClick={() => {
                                        navi('/bookatable');
                                    }}
                                >Book A Table</button>
                                <button type="button" className="btn btn-success "
                                    onClick={() => {
                                        navi('/cart');
                                    }}
                                >Cart
                                    <span className="badge bg-danger">{items.length}</span>
                                </button>
                            </span>
                        )
                            :
                            (
                                <button type="button" className="btn btn-success"
                                    onClick={()=>{
                                        navi('/Login')
                                    }}
                                >Login</button>
                                
                            )
                    }
                    {/* <button type="button" className="btn btn-success ">Order-Online</button> */}
                </nav>

            </div>
        </div>
    )
}
