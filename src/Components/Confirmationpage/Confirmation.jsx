import React from 'react'
import "./Confirmation.css"
import { useCart } from 'react-use-cart'
import { useNavigate } from 'react-router-dom';



export default function Confirmation() {

    const navi = useNavigate()

    const {items} = useCart();



    return (
        <div>
            <div className="cart container">
                <div className="conform-order">
                    <table className="table table-light table-hover mt-5">
                        <tbody>
                            {items.map((item, index) => (
                                <tr key={index}>
                                    <td>
                                        <img src={item.image} style={{ height: '6rem' }} alt='itemImg' />
                                    </td>
                                    <td>{item.name}</td>
                                    <td>₹ {item.price}</td> {/* Display price as it is */}
                                    <td>Quantity {item.quantity}</td>
                                    
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
                <div className='buttonconfirm'>
                    <button class="btn btn-success" onClick={()=>{
                        navi("/Payments")
                    }}>PLACE ORDER</button>
                    <button class="btn btn-warning" onClick={()=>{
                        navi("/cart")
                    }}>BACK TO CART</button>
                </div>
            </div>
            </div>
            )
}
