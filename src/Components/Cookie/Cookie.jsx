import React from 'react'
import './Cookie.css'
import Footer from '../Footer/Footer'

export default function Cookie() {
    return (
        <div>
            <div className='cookie-p '>
                <p>COOKIE POLICY</p>
            </div>
            <div className='cookie-h2-p'>
            <h2>Introduction</h2>
            <p>This Cookie Policy explains how SK foods uses cookies and similar technologies on our website (“Website”). By using our Website, you consent to the use of cookies as described in this policy.</p>
            <br />
            <h2>What are Cookies</h2>
            <p>Cookies are small text files that are placed on your device when you visit a website. They help improve your browsing experience by remembering your preferences, enabling certain functionality, and analyzing user behavior.</p>
            <br />
            <h2>How to Use Cookies...</h2>
            <h3>1.) Essential Cookies:</h3>
            <p>These cookies are necessary for the proper functioning of the Website. They enable core features such as navigation and access to secure areas of the Website. Without these cookies, the Website may not function as intended.</p>
            <br />
            <h3>2.) Analytical/Performance Cookies:</h3>
            <p>These cookies help us understand how visitors use our Website. They collect information about which pages are visited most often, the time spent on the Website, and any error messages. This information is used to improve the performance and usability of the Website.</p>
            <br />
            <h3>3.) Functional Cookies:</h3>
            <p>Functional cookies enhance the user experience by remembering your choices and preferences, such as language preferences and font size selections. They may also provide personalized features.</p>
            <br />
            <h3>4.) Contact Us</h3>
            <p>If you have any questions or concerns about this Cookie Policy or our use of cookies, please contact us through our Contact Us Page</p>
            </div>
            <Footer />
        </div>
    )
}
