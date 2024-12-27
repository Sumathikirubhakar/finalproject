// 
import React, { useState } from 'react';
import './Payments.css';
import { useCart } from 'react-use-cart';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export default function Payments() {
    const {cartTotal,items,emptyCart} = useCart()
    const userDetails = localStorage.getItem("user");
    const user = JSON.parse(userDetails)
    const navi = useNavigate()

    console.log(user);

    
    // State to store form inputs and order summary
    const [formData, setFormData] = useState({
        fullName: user.Username,
        email: user.Email,
        address: '',
        city: '',
        state: '',
        zipCode: '',
        paymentMethod: 'Cash on Delivery',
        amount: cartTotal,
    });

    const [orderSummary, setOrderSummary] = useState(null);

    // Handle input changes
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    // Handle form submission
    const handleSubmit = (e) => {
        e.preventDefault();
        setOrderSummary(formData);
        const UserAddress = `${formData.address}\n${formData.city}\n${formData.state}\n${formData.zipCode}` 
        axios.post('http://localhost:4000/Deleivery/post', {
            Username:formData.fullName,
            Orders: items,
            Address:UserAddress
        })
        .then(()=>{
            navi('/home');
            localStorage.removeItem('react-use-cart');
            emptyCart();
            
        })
    };

    return (
        <div>
            <div className="kirupayment">
                <form id="paymentForm" onSubmit={handleSubmit}>
                    <div className="row">
                        <div className="column">
                            <h3 className="title">Billing Address</h3>
                            <div className="input-box">
                                <span>Full Name :</span>
                                <input
                                    type="text"
                                    name="fullName"
                                    placeholder="Kirubhakar"
                                    value={formData.fullName}
                                    onChange={handleChange}
                                    disabled
                                />
                            </div>
                            <div className="input-box">
                                <span>Email :</span>
                                <input
                                    type="email"
                                    name="email"
                                    placeholder="example@example.com"
                                    value={formData.email}
                                    onChange={handleChange}
                                    disabled
                                    
                                />
                            </div>
                            <div className="input-box">
                                <span>Address :</span>
                                <input
                                    type="text"
                                    name="address"
                                    placeholder="Room - Street - Locality"
                                    value={formData.address}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                            <div className="input-box">
                                <span>City :</span>
                                <input
                                    type="text"
                                    name="city"
                                    placeholder="Enter a city"
                                    value={formData.city}
                                    onChange={handleChange}
                                    required
                                />
                            </div>

                            <div className="flex">
                                <div className="input-box">
                                    <span>State :</span>
                                    <input
                                        type="text"
                                        name="state"
                                        placeholder="Tamilnadu"
                                        value={formData.state}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>
                                <div className="input-box">
                                    <span>Zip Code :</span>
                                    <input
                                        type="text"
                                        name="zipCode"
                                        placeholder="Enter a Zipcode"
                                        value={formData.zipCode}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>
                            </div>
                        </div>

                        <div className="column">
                            <h3 className="title">Payment</h3>
                            <div className="input-box">
                                <span>Cash On Delivery :</span>
                                <input
                                    type="radio"
                                    id="cod"
                                    name="paymentMethod"
                                    value="Cash on Delivery"
                                    checked={formData.paymentMethod === 'Cash on Delivery'}
                                    onChange={handleChange}
                                />
                                <label htmlFor="cod">Pay on Delivery</label>
                            </div>
                            <div className="input-box">
                                <span>Amount :</span>
                                <input
                                    type="text"
                                    name="amount"
                                    value={cartTotal}
                                    readOnly
                                />
                            </div>
                        </div>
                    </div>

                    <button type="submit" className="btn">Submit</button>
                </form>

                {orderSummary && (
                    <div id="output" style={{ marginTop: 20, padding: 10, backgroundColor: "white" }}>
                        <h4>Order Summary</h4>
                        <p><strong>Full Name:</strong> {orderSummary.fullName}</p>
                        <p><strong>Email:</strong> {orderSummary.email}</p>
                        <p><strong>Address:</strong> {orderSummary.address}</p>
                        <p><strong>City:</strong> {orderSummary.city}</p>
                        <p><strong>State:</strong> {orderSummary.state}</p>
                        <p><strong>Zip Code:</strong> {orderSummary.zipCode}</p>
                        <p><strong>Payment Method:</strong> {orderSummary.paymentMethod}</p>
                        <p><strong>Amount:</strong> ₹{orderSummary.amount}</p>
                    </div>
                )}
            </div>
        </div>
    );
}
