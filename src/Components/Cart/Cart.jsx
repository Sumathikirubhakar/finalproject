import React from 'react'
import { useCart } from 'react-use-cart';
import Home from '../Homepage/Home';
import Footer from '../Footer/Footer';
import { useNavigate } from 'react-router-dom';

export default function Cart() {
    const {
        isEmpty,
        items,
        updateItemQuantity,
        removeItem,
        emptyCart
    } = useCart();

    const navi = useNavigate()


    // Calculate the total manually
    const total = items.reduce((acc, item) => {
        // Clean the price (remove any non-numeric characters and convert to number)
        const price = parseFloat(item.price);
        console.log(item);
        
    
        // Make sure price is a valid number before multiplying
        if (!isNaN(price)) {
            // Multiply price by quantity and add to accumulator
            return acc + (price * item.quantity);
        }
    
        // If price is invalid, just return the accumulator as is
        return acc;
    }, 0);
    
    console.log(total); // This should show the correct total price
    

    return (
        <div style={{ width: '100vw' }}>
            <div className="nav-cart mt-5 pt-5">
                {/* Add any other navigation content here */}
            </div>

            {isEmpty ? (
                <h1 className='fw-bold align-items-center d-flex justify-content-center m-5 p-5'>YOUR CART IS EMPTY.</h1>
            ) : (
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
                                        <td>
                                            <button className='btn btn-primary ms-2'
                                                onClick={() => updateItemQuantity(item.id, item.quantity - 1)}
                                            >-</button>
                                            <button className='btn btn-warning ms-2'
                                                onClick={() => updateItemQuantity(item.id, item.quantity + 1)}>+</button>
                                            <button className='btn btn-danger ms-2'
                                                onClick={() => removeItem(item.id)}
                                            >Remove</button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                    <div className="col-auto mx-auto d-flex justify-content-end">
                        <h2>Total Price: ₹ {total.toFixed(2)} </h2>
                    </div>
                    <div className="col-auto">
                        <div className='d-flex justify-content-end'>
                            <button className='btn btn-secondary' onClick={() => emptyCart()}>Clear Cart</button>
                            <button className='btn btn-info mx-3' onClick={()=>{
                                navi('/confirmation')
                            }}>Buy Now</button>
                        </div>
                    </div>
                </div>
            )}

            <div className="nav-footer bg-dark">
                <Footer />
            </div>
        </div>
    )
}
