import React from 'react'
import './Media.css'
import Footer from '../Footer/Footer'

export default function Media() {
    return (
        <div>
            <div className='container-card'>

            <div>
                <div class="card">
                    <img src="https://handsonpeople.com.au/wp-content/uploads/2021/11/Blood-Donation-1-480x412.jpg" alt="blood" height="500" width="500" />
                    <div class="container">
                        <h4><b>BLOOD DONATION CAMPAIGN</b></h4>
                    </div>
                </div>
            </div>
            <div>
                <div class="card">
                    <img src="https://images.stockcake.com/public/0/8/d/08d1b580-432e-4126-a06e-674052a4da03_large/community-tree-planting-stockcake.jpg" alt="tree" height="500" width="500" />
                    <div class="container">
                        <h4><b>TREE PLANTATION CAMPAIGN</b></h4>
                    </div>
                </div>
            </div>
            <div>
                <div class="card">
                    <img src="https://voicetrustmadurai.org/wp-content/uploads/2024/05/free-medical-camp-in-ramanda-img6.jpg" alt="medicalcamp" height="500" width="500" />
                    <div class="container">
                        <h4><b>FREE MEDICAL CAMP</b></h4>
                    </div>
                </div>
            </div>
            <div>
                <div class="card">
                    <img src="https://pbs.twimg.com/media/Eya3CtYVcAMC-x4?format=jpg&name=large" alt="servefoods" height="500" width="500" />
                    <div class="container">
                        <h4><b>SERVING FOODS</b></h4>
                    </div>
                </div>
            </div>
            </div>

            <Footer />
        </div>
    )
}
