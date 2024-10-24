import React from 'react'
import Footer from '../Footer/Footer'
import "./Northindianfood.css"


export default function Northindianfood() {
    return (
        <div>
            <div className='North'>
                <div className="Foods">
                    <img src="https://w7.pngwing.com/pngs/908/351/png-transparent-mattar-paneer-indian-cuisine-paneer-tikka-masala-vegetarian-cuisine-paneer-soup-food-recipe-thumbnail.png" alt="#" height="200" width="150" />
                    <h4>PANNER SOUP</h4>
                    <h4>Rs.120</h4>
                    <button className='btn btn-primary'><i class="bi bi-bag-heart-fill">Buy Now</i></button>
                </div>
                <div className="Foods">
                    <img src="https://i.pinimg.com/564x/17/1a/3e/171a3e208d3a2bf69b6bf0a37b28bca4.jpg" alt="#" height="200" width="150" />
                    <h4>ALOO CHAT RECEIPIE</h4>
                    <h4>Rs.100</h4>
                    <button className='btn btn-primary'><i class="bi bi-bag-heart-fill">Buy Now</i></button>
                </div>
                <div className="Foods">
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSsU4w06mev6SnakFrK3JVMomqaQdq-mfmuVLrHOzcV1eP2Ux4rOh8xw5TXgrBcP9NZC1s&usqp=CAU" alt="#" height="200" width="150" />
                    <h4>GOBI MANCHURIEN</h4>
                    <h4>Rs.50</h4>
                    <button className='btn btn-primary'><i class="bi bi-bag-heart-fill">Buy Now</i></button>
                </div>
                <div className="Foods">
                    <img src="https://png.pngtree.com/png-vector/20240803/ourmid/pngtree-delicious-paneer-butter-masala-on-white-background-png-image_13347750.png" alt="#" height="200" width="250" />
                    <h4>TAWA PANNER SABJI</h4>
                    <h4>Rs.150</h4>
                    <button className='btn btn-primary'><i class="bi bi-bag-heart-fill">Buy Now</i></button>
                </div>
                <div className="Foods">
                    <img src="https://vashishti.com/cdn/shop/articles/1_MZWYGXy1CudqiPeInqm-dg_1024x1024.jpg?v=1704182474" alt="#" height="200" width="150" />
                    <h4>PONGAL</h4>
                    <h4>Rs.80</h4>
                    <button className='btn btn-primary'><i class="bi bi-bag-heart-fill">Buy Now</i></button>
                </div>
                <div className="Foods">
                    <img src="https://png.pngtree.com/png-clipart/20231018/original/pngtree-traditional-chapati-tortillas-isolated-created-with-generative-ai-png-image_13355683.png" alt="#" height="200" width="150" />
                    <h4>CHAPATHI</h4>
                    <h4>Rs.60</h4>
                    <button className='btn btn-primary'><i class="bi bi-bag-heart-fill">Buy Now</i></button>
                </div>
                <div className="Foods">
                    <img src="https://static.vecteezy.com/system/resources/thumbnails/025/269/904/small_2x/butter-chicken-with-ai-generated-free-png.png" alt="#" height="200" width="150" />
                    <h4>BUTTER CHICKEN</h4>
                    <h4>Rs.60</h4>
                    <button className='btn btn-primary'><i class="bi bi-bag-heart-fill">Buy Now</i></button>
                </div>
                <div className="Foods">
                    <img src="https://img.freepik.com/premium-photo/indian-healthy-cuisine-palak-paneer-white-background_55610-743.jpg" alt="#" height="200" width="150" />
                    <h4>PALAK PANEER</h4>
                    <h4>Rs.60</h4>
                    <button className='btn btn-primary'><i class="bi bi-bag-heart-fill">Buy Now</i></button>
                </div>
            </div>
            <Footer />

        </div>
    )
}
