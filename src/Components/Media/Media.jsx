import React from 'react'
import './Media.css'
import Footer from '../Footer/Footer'

export default function Media() {
    return (
        <div>
            <div>
                <h2>Blood Donation Camp</h2>
                <div class="card">
                    <img src="https://www.classy.org/wp-content/uploads/2022/10/nguy-n-hi-p-ufwC2cmbaaI-unsplash-1024x572.jpg" alt="blood" style="width:100%">
                        <div class="container">
                            <h4><b>John Doe</b></h4>
                            <p>Architect & Engineer</p>
                        </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}
