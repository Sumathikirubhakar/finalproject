import React, { useEffect, useState } from 'react'
import Footer from '../Footer/Footer'
import "./Karnatakafoods.css"
import { Link } from 'react-router-dom'
import { useCart } from 'react-use-cart';


export default function Karnatafoods() {

    const [kaFoods, setKaFoods] = useState([]);
    useEffect(() => {
        fetch('food/karnataka.json')
            .then((res) => { return res.json() })
            .then((data) => { setKaFoods(data) })
            .catch(Err => { console.log(Err); })
    }, [])

    console.log(kaFoods);

    const {addItem,items} = useCart();

    function addCartItem(data){
        console.log('added');
        addItem(data);
    }

    return (
        <div>
            <div className='karnataka'>
                {
                    kaFoods.map((item, index) => {
                        return (
                            <div className="Foods">
                                <Link to={item.link}>
                                    <img src={item.image} alt="#" height="200" width="150" /></Link>
                                <h4>{item.name}</h4>
                                <h4>Rs.{item.price}</h4>
                                <button className='btn btn-primary'><i class="bi bi-bag-heart-fill" onClick={()=>{
                                    addCartItem(item)
                                }}>Add Cart</i></button>
                            </div>
                        )
                    })
                }

            </div>
            <Footer />
        </div>
    )
}