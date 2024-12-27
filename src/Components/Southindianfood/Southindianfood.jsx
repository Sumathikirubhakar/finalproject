import React, { useEffect, useState } from 'react'
import Footer from '../Footer/Footer'
import "./Southindianfood.css"
import { Link } from 'react-router-dom'
import { useCart } from 'react-use-cart'

export default function Southindianfood() {
    const [Southindianfood, setSouthindianfoods] = useState([]);
    useEffect(() => {
        fetch('food/Southindian.json')
            .then((res) => { return res.json() })
            .then((data) => { setSouthindianfoods(data) })
            .catch(Err => { console.log(Err); })
    }, [])


    const {addItem,items} = useCart();

    function addCartItem(data){
        console.log('added');
        
        addItem(data);

        // console.log(items);
        
    }

    return (
        <div>
            <div className='kerela'>
                {
                    Southindianfood.map((item, index) => {
                        return (

                            <div className="kerelaFoods" key={index}>
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
