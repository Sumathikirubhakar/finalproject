import React, { useEffect, useState } from 'react'
import Footer from '../Footer/Footer'
import "./kerelafoods.css"
import { Link } from 'react-router-dom'


export default function Kerelafoods() {
    const [KlFoods, setKlFoods] = useState([]);
    useEffect(() => {
        fetch('food/kerela.json')
            .then((res) => { return res.json() })
            .then((data) => { setKlFoods(data) })
            .catch(Err => { console.log(Err); })
    }, [])

    console.log(KlFoods);
    return (
        <div>
            <div className='kerela'>
                {
                    KlFoods.map((item, index) => {
                        return (
                            <div className="kerelaFoods">
                                <Link to={item.link}>
                                    <img src={item.image} alt="#" height="200" width="150" /></Link>
                                <h4>{item.name}</h4>
                                <h4>Rs.{item.price}</h4>
                                <button className='btn btn-primary'><i class="bi bi-bag-heart-fill">Buy Now</i></button>
                            </div>
                        )
                    })
                }

            </div>

            <Footer />
        </div>
    )
}
