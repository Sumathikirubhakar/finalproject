import React from 'react'
import Footer from '../Footer/Footer'
import "./Southindianfood.css"
import { Link } from 'react-router-dom'

export default function Southindianfood() {
    return (
        <div>
            <div className='south'>
                <div className="Foods">
                    <Link to='/Dhosa'>
                        <img src="https://st2.depositphotos.com/44388702/44219/i/450/depositphotos_442199556-stock-photo-homemade-dosa-dhosa-masala-plain.jpg" alt="#" height="200" width="150" /></Link>
                    <h4>DHOSA</h4>
                    <h4>Rs.50</h4>
                    <button className='btn btn-primary'><i class="bi bi-bag-heart-fill">Buy Now</i></button>
                </div>
                <div className="Foods">
                    <Link to='/Idlyvada'>
                        <img src="https://i.pinimg.com/736x/24/7d/63/247d63ebed90c69c479dc8095ebd1457.jpg" alt="#" height="200" width="150" /></Link>
                    <h4>IDLY & VADA</h4>
                    <h4>Rs.60</h4>
                    <button className='btn btn-primary'><i class="bi bi-bag-heart-fill">Buy Now</i></button>
                </div>
                <div className="Foods">
                    <Link to='/Paniyaram'>
                        <img src="https://t3.ftcdn.net/jpg/04/47/24/76/360_F_447247650_fATbfFFKbgr2VTdmRMRiBakCCQLEK1Dl.jpg" alt="#" height="200" width="150" /></Link>
                    <h4>PANIYARAM</h4>
                    <h4>Rs.50</h4>
                    <button className='btn btn-primary'><i class="bi bi-bag-heart-fill">Buy Now</i></button>
                </div>
                <div className="Foods">
                    <Link to='/Methuvada'>
                    <img src="https://media.istockphoto.com/id/1262305920/photo/tea-time-snack-dal-vada-or-parippu-vada-or-paruppu-vadai-deep-fried-snacks-savory-food-from.jpg?s=612x612&w=0&k=20&c=Dxeb2eSaXCiumc_muijW3R-T7GBNnSxVuc0J0LS3DOo=" alt="#" height="200" width="250" /></Link>
                    <h4>MEDHU VADA</h4>
                    <h4>Rs.20</h4>
                    <button className='btn btn-primary'><i class="bi bi-bag-heart-fill">Buy Now</i></button>
                </div>
                <div className="Foods">
                    <img src="https://vashishti.com/cdn/shop/articles/1_MZWYGXy1CudqiPeInqm-dg_1024x1024.jpg?v=1704182474" alt="#" height="200" width="150" />
                    <h4>PONGAL</h4>
                    <h4>Rs.50</h4>
                    <button className='btn btn-primary'><i class="bi bi-bag-heart-fill">Buy Now</i></button>
                </div>
                <div className="Foods">
                    <img src="https://png.pngtree.com/png-clipart/20231018/original/pngtree-traditional-chapati-tortillas-isolated-created-with-generative-ai-png-image_13355683.png" alt="#" height="200" width="150" />
                    <h4>CHAPATHI</h4>
                    <h4>Rs.60</h4>
                    <button className='btn btn-primary'><i class="bi bi-bag-heart-fill">Buy Now</i></button>
                </div>
                <div className="Foods">
                    <img src="https://i.pinimg.com/474x/ce/18/89/ce18891c60315222f4971021f91cd85d.jpg" alt="#" height="200" width="150" />
                    <h4>TEA</h4>
                    <h4>Rs.12</h4>
                    <button className='btn btn-primary'><i class="bi bi-bag-heart-fill">Buy Now</i></button>
                </div>
                <div className="Foods">
                    <img src="https://vandyam.in/wp-content/uploads/2021/10/Special-Meal-170--300x300.png" alt="#" height="200" width="150" />
                    <h4>MINI MEALS</h4>
                    <h4>Rs.60</h4>
                    <button className='btn btn-primary'><i class="bi bi-bag-heart-fill">Buy Now</i></button>
                </div>
            </div>
            <Footer />
        </div>
    )
}
