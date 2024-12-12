import React, { useEffect, useState } from 'react'
import Footer from '../Footer/Footer'
import "./Northindianfood.css"
import { Link } from 'react-router-dom'


export default function Northindianfood() {
    const [Northindianfood, setNorthindianfoods] = useState([]);
    useEffect(() => {
        fetch('food/Northindian.json')
            .then((res) => { return res.json() })
            .then((data) => { setNorthindianfoods(data) })
            .catch(Err => { console.log(Err); })
    }, [])

    console.log(Northindianfood);
    return (
        <div>
            <div className='North'>
                {
                    Northindianfood.map((item, index) => {
                        return(

                            <div className="Foods">
                            <Link to={item.link}>
                                <img src={item.image_url} alt="#" height="200" width="150" />
                            </ Link>
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
