import React, { useState } from 'react'
import Footer from '../Footer/Footer'
import "./Bookatable.css"
import axios from 'axios';
import { useNavigate } from 'react-router-dom';


export default function Bookatable() {
    // Array to store selected tables
    const navi = useNavigate();
    const [selectedTables, setSelectedTables] = useState([]);

    
    const [name, setName] = useState("");
    const [phone, setPhone] = useState("");
    const [date, setDate] = useState("");
    const [time, setTime] = useState("");
    const [guests, setGuests] = useState("");

    // Data for the tables in the 3 bays
    const tableData = [
        ['Table 1', 'Table 2', 'Table 3'],
        ['Table 4', 'Table 5', 'Table 6'],
        ['Table 7', 'Table 8', 'Table 9']
    ];

    //     function Book() {


    //         const handleSubmit = (e) => {
    //             e.preventDefault();
    //             setIsSubmitted(true);
    //         };

    //         return (

    //         );
    //     }
    // ];
    // console.log('Successfully Booked');

    // Handle table selection
    const handleTableClick = (tableName) => {
        setSelectedTables((prevSelected) => {
            if (prevSelected.includes(tableName)) {
                // Remove the table if already selected
                return prevSelected.filter((table) => table !== tableName);
            } else {
                // Add the table if not selected
                return [...prevSelected, tableName];
            }
        });
    };

    // Style for selected table
    const getCellStyle = (tableName) => {
        return selectedTables.includes(tableName) ? { backgroundColor: '#D3D3D3' } : {};
    };


    const handleBookTable = (e) => {
        e.preventDefault();

        console.log({
            Name: name,
            PhoneNumber: phone,
            Date: date,
            Time: time,
            Numberofguests: guests,
            Tables: selectedTables
        });
        
        axios.post('http://localhost:4000/Book/post', {
            Name: name,
            PhoneNumber: phone,
            Date: date,
            Time: time,
            Numberofguests: guests,
            Tables: selectedTables
        })
        .then(()=>{

            navi('/home')
        })
    }

    return (
        <div class="bookings">
            <h2>BOOK A TABLE</h2>
            <img src="https://urbanologie.com/media_cache/inner_slider/media/0_Dubai_April/Ruya1.jpg" alt="noimage" height="500" width="100%" />

            <form id="booking-form" onSubmit={handleBookTable}>
                <label for="name">Name:</label>
                <input type="text" id="name" name="name" value={name} onChange={(e) => { setName(e.target.value) }} required />

                <label for="phone">Phone Number:</label>
                <input type="tel" id="phone" name="phone" value={phone} onChange={(e) => { setPhone(e.target.value) }} required />

                <label for="date">Date:</label>
                <input type="date" id="date" name="date" value={date} onChange={(e) => { setDate(e.target.value) }} required />

                <label for="time">Time:</label>
                <input type="time" id="time" name="time" value={time} onChange={(e) => { setTime(e.target.value) }} required />

                <label for="guests">Number of Guests:</label>
                <input type="number" id="guests" name="guests" value={guests} onChange={(e) => { setGuests(e.target.value) }} min="1" required />

                <button type="submit">Book Now</button>
            </form>

            <table style={{ width: '100%' }} className="tables">
                <thead>
                    <tr>
                        <th>BAY 1</th>
                        <th>BAY 2</th>
                        <th>BAY 3</th>
                    </tr>
                </thead>
                <tbody>
                    {tableData.map((row, rowIndex) => (
                        <tr key={rowIndex}>
                            {row.map((table, colIndex) => (
                                <td
                                    key={colIndex}
                                    className="selectable"
                                    style={getCellStyle(table)}
                                    onClick={() => handleTableClick(table)}
                                >
                                    {table}
                                </td>
                            ))}
                        </tr>
                    ))}
                </tbody>
            </table>

            {/* Display selected tables */}
            <div>
                <h3>SELECTED TABLES:</h3>
                <ol>
                    {selectedTables.map((table, index) => (
                        <li key={index}>{table}</li>
                    ))}
                </ol>
            </div>
            <Footer />
        </div>
    )
}
