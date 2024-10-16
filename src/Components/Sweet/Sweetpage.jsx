import React from 'react'
import Footer from '../Footer/Footer'
import "./sweetpage.css"

export default function Sweetpage() {
    return (
        <div>
            <div class="wholeparts">
                <h1>Sweet Pages</h1>
                <img src="https://aabsweets.com/wp-content/themes/a2b/images/sweets.png" alt="" height="800" width="1600" />
                <h1 class="sp">SK Foods and Snacks</h1>
                <h2 class="sp11">Tasting in to happiness 😎🍹</h2>
                <p class="sp12">Brought to you by the team behind Your Favourite Native Confectioners. We at Great Indian Sweets bringing back home, a Celebration of Authentic Native Sweets that have moulded our Happiest Occasions.</p>
            </div>
            <div class="wholeparts11">
                <h1>DELICIOUS SWEETS AND FOODGRAINS..</h1>
                <div class="grid-container">
                    <div class="grid-item">
                        <h3>Sweets & Confections</h3>
                        <p>Traditional sweets are a perfect blend of delicious taste and high nutritional value. Explore pure milk and ghee sweets, dry fruit sweets, and a variety of traditional sweets in our repertoire.</p>
                    </div>
                    <div class="grid-item">
                        <img src="https://aabsweets.com/wp-content/themes/a2b/images/sweets-confections.png" alt="#" height="350" width="700" />
                    </div>
                    <div class="grid-item">
                        <img src="https://aabsweets.com/wp-content/themes/a2b/images/ser-savouries.png" alt="#" height="350" width="700" />
                    </div>
                    <div class="grid-item">
                        <h3>Savouries</h3>
                        <p>Savouries are the perfect accompaniment. From crunchy kara-sevs to traditional ellu murukkus, we have an entire range that will tickle your taste buds and add joy to your day</p>
                    </div>
                    <div class="grid-item">
                        <h3>Delicious Sweets</h3>
                        <p>Savour the exotic specialities, including speialities from the Middle East. Experience the perfect balance honey-kissed sweetness and nutty creaminess made to authentic perfection .with our veritable collection of Baklavas and dry-fruit sweets.</p>
                    </div>
                    <div class="grid-item">
                        <img src="https://aabsweets.com/wp-content/themes/a2b/images/exotic-sweet.png" alt="#" height="350" width="700" />
                    </div>
                    <div class="grid-item">
                        <img src="https://www.aromabakeryonline.com/image/cache/catalog/products/potato-chips-600x600.jpg" alt="" height="350" width="700" />
                    </div>
                    <div class="grid-item">
                        <h3>Spicy & Hotchips</h3>
                        <p> salt triggers a feeling of reward and pleasure in your brain and makes you want more. And there's plenty of salt on chips, even our flavored ones are salty, and the flavors are mixed in a certain way so you don't get tired of them.</p>
                    </div>
                </div>
            </div>
            <Footer />

        </div>
    )
}
