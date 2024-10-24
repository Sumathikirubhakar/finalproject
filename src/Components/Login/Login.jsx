import React from 'react'
import './Login.css'

export default function Login() {
    return (
        <div className='main1'>
            <div className='whole-div1'>
                <div class="container">
                    <form action="#" className='login'>
                        <h2>LOG IN</h2>
                        <div class="image">
                            <img src="https://thumbs.dreamstime.com/b/login-icon-button-vector-illustration-isolated-white-background-126997728.jpg" alt="Noimage" height="250" width="200" />
                        </div>

                        <label for="username">USERNAME</label>
                        <input type="text" id="username" name="username" placeholder="Enter your name" required />
                        <label for="password">PASSWORD</label>
                        <input type="password" id="password" name="password" placeholder="Enter your password" required />

                        <button type="submit" >Login</button>
                    </form>
                </div>
            </div>
        </div>
    )
}
