import React from 'react'
import "./Admindashboard.css"


export default function Admindashboard() {
    return (
        <div className='main-navnav'>
            <div class="nav12">
                <p class="welcome">SK FOODS AND SNACKS.....!!!</p>
            </div>
            <div className='nav13'>
                <p>Dashboard</p>
            </div>
            <div class="row">
                <div class="col-sm-6 mb-5 w-25 ms-5 ">
                    <div class="card">
                        <div class="card-body">
                            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="40" fill="currentColor" class="bi bi-person-circle ms-5" viewBox="0 0 16 16">
                                <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0" />
                                <path fill-rule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8m8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1" />
                            </svg>
                            <p class="card-text ms-5 ">2500+</p>
                            <p class="card-text ms-5 ">Welcome</p>
                        </div>
                    </div>
                </div>
                <div class="col-sm-6 mb-5 w-25">
                    <div class="card">
                        <div class="card-body">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-clock" viewBox="0 0 16 16">
                                <path d="M8 3.5a.5.5 0 0 0-1 0V9a.5.5 0 0 0 .252.434l3.5 2a.5.5 0 0 0 .496-.868L8 8.71z" />
                                <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16m7-8A7 7 0 1 1 1 8a7 7 0 0 1 14 0" />
                            </svg>
                            <p class="card-text ms-5 ">12.00</p>
                            <p class="card-text ms-5 ">Average Time</p>
                        </div>
                    </div>
                </div>
                <div class="col-sm-6 mb-5 w-25">
                    <div class="card">
                        <div class="card-body">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chat-dots-fill" viewBox="0 0 16 16">
                                <path d="M16 8c0 3.866-3.582 7-8 7a9 9 0 0 1-2.347-.306c-.584.296-1.925.864-4.181 1.234-.2.032-.352-.176-.273-.362.354-.836.674-1.95.77-2.966C.744 11.37 0 9.76 0 8c0-3.866 3.582-7 8-7s8 3.134 8 7M5 8a1 1 0 1 0-2 0 1 1 0 0 0 2 0m4 0a1 1 0 1 0-2 0 1 1 0 0 0 2 0m3 1a1 1 0 1 0 0-2 1 1 0 0 0 0 2" />
                            </svg>
                            <p class="card-text ms-5 ">50+</p>
                            <p class="card-text ms-5 ">Comments</p>
                        </div>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-sm-6">
                    <div class="card">
                        <div class="card-body">
                            <h5 class="card-title">Special title treatment</h5>
                            <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
                            <a href="#" class="btn btn-primary">Go somewhere</a>
                        </div>
                    </div>
                </div>
                <div class="col-sm-6 w-25">
                    <div class="card">
                        <div class="card-body">
                            <img src="https://img.freepik.com/premium-vector/vector-blue-social-media-logo_1080184-225.jpg?semt=ais_hybrid" alt="noimage" height="100" width="150" />
                            <hr />
                            <h5 class="card-title">10k Friends</h5>
                            <span><br />128 Feeds</span>
                        </div>
                    </div>
                </div>
            </div>
            <div class="sidenav">
                <a href="#Menu" className='mt-5'>Menu</a>
                <a href="#Foods">Foods</a>
                <a href="#Hotels">Hotels</a>
                <a href="#Delievery">Delievery</a>
                <a href="#Users">Users</a>
                {/* <button class="dropdown-btn">Dropdown
                    <i class="fa fa-caret-down"></i>
                </button>
                <div class="dropdown-container">
                    <a href="#">kiru</a>
                    <a href="#">Link 2</a>
                    <a href="#">Link 3</a>
                </div> */}
                <a href="#contact">Search</a>
            </div>
        </div>
    )
}
