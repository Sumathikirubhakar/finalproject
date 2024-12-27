// import React from 'react'
// import Footer from '../Footer/Footer'
// import "./Dhosa.css";
// import { useCart } from 'react-use-cart';

// export default function Dhosa() {
//     const {addItem} = useCart( )
//     return ( 
//         <div className='Dhosa11'>
//             <div class="grid-container">
//                 <div class="grid-item">
//                     <img src="https://st2.depositphotos.com/44388702/44219/i/450/depositphotos_442199556-stock-photo-homemade-dosa-dhosa-masala-plain.jpg" alt="#" height="350" width="700" />
//                 </div>
//                 <div class="grid-item">
//                     <h3>DHOSA</h3>
//                     <h4>₹50 /-</h4>
//                     <ul className='Dhosa'>
//                         <li><input type="checkbox" /> GHEE DHOSA</li>
//                         <li><input type="checkbox" /> MASAL DHOSA</li>
//                         <li><input type="checkbox" /> PODI DHOSA</li>
//                         <li><input type="checkbox" /> ONION DHOSA</li>
//                     </ul>
//                     <div className='dosabtn'>
//                         <button className='btn btn-success'onClick={()=>addItem()}>Add to Cart</button>
//                         <button className='btn btn-success'>Buy Now</button>

//                     </div>
//                 </div>
//             </div>
//             <Footer />
//         </div>
//     )
// }



import React, { useEffect, useState } from 'react';
import Footer from '../Footer/Footer';
import './Dhosa.css';
import { useCart } from 'react-use-cart';

export default function Dhosa() {
    const { addItem } = useCart();

    // State to track which types of Dosas are selected
    const [selectedDosas, setSelectedDosas] = useState({
        ghee: false,
        masal: false,
        podi: false,
        onion: false,
    });

    // Handle checkbox changes
    const handleCheckboxChange = (e) => {
        const { name, checked } = e.target;
        setSelectedDosas(prevState => ({
            ...prevState,
            [name]: checked
        }));
    };

const [itm1,setitm1]=useState('');
const [itm2,setitm2]=useState('');
const [itm3,setitm3]=useState('');


useEffect(()=>{
    
    setitm1(localStorage.getItem('id'))
    setitm2(localStorage.getItem('name'))
    setitm3(localStorage.getItem('price'))

})


    const data ={
        id:itm1,
        name:itm2,
        price:itm3,
    }
    
    function show(item){
        // addItem(item)
    }

    // Add item to cart
    const handleAddToCart = () => {
        // Collect the selected dosa options
        const selectedOptions = Object.keys(selectedDosas).filter(dosa => selectedDosas[dosa]);

        // Check if any dosa type is selected
        if (selectedOptions.length === 0) {
            alert("Please select at least one type of Dosa!");
            return;
        }

        // Define the item to be added to the cart
        const item = {
            id: 1, // Unique ID for the item (can be dynamic)
            name: 'Dhosa',
            price: 50, // Price for the base Dhosa (could vary based on type)
            quantity: 1,
            selectedOptions: selectedOptions.join(', ') // Store selected options as a string
        };

        // Add the item to the cart
        addItem(item);
    };

    return (
        <div className="Dhosa11">
            <div className="grid-container">
                <div className="grid-item">
                    <img
                        src="https://st2.depositphotos.com/44388702/44219/i/450/depositphotos_442199556-stock-photo-homemade-dosa-dhosa-masala-plain.jpg"
                        alt="#"
                        height="350"
                        width="700"
                    />
                </div>
                <div className="grid-item">
                    <h3>DHOSA</h3>
                    <h4>₹50 /-</h4>
                    <ul className="Dhosa">
                        <li>
                            <input
                                type="checkbox"
                                name="ghee"
                                checked={selectedDosas.ghee}
                                onChange={handleCheckboxChange}
                            />
                            GHEE DHOSA
                        </li>
                        <li>
                            <input
                                type="checkbox"
                                name="masal"
                                checked={selectedDosas.masal}
                                onChange={handleCheckboxChange}
                            />
                            MASAL DHOSA
                        </li>
                        <li>
                            <input
                                type="checkbox"
                                name="podi"
                                checked={selectedDosas.podi}
                                onChange={handleCheckboxChange}
                            />
                            PODI DHOSA
                        </li>
                        <li>
                            <input
                                type="checkbox"
                                name="onion"
                                checked={selectedDosas.onion}
                                onChange={handleCheckboxChange}
                            />
                            ONION DHOSA
                        </li>
                    </ul>
                    <div className="dosabtn">
                        <button className="btn btn-success" onClick={() =>show(data)}>
                            Add to Cart
                        </button>
                        <button className="btn btn-success">Buy Now</button>
                    </div>
                </div>
            </div>
            



            <Footer />

        </div>


    );
}

