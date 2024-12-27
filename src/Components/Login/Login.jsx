import React, { useState } from 'react'
import './Login.css'
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

export default function Login() {

    const navi = useNavigate()

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    function handleLogin(e) {
        e.preventDefault()
        console.log(username, password);

        axios.post('http://localhost:4000/kiru/login',{
            Email:username,
            password:password
        })
        .then((res)=>{
            if(res.data.message){
                // console.log(res.data.user);
                
                navi('/home')
                localStorage.setItem("isLogedin",true)
                localStorage.setItem("user",JSON.stringify(res.data.user))

            }
            else{
                alert("auth fail")
            }
        })
    }

    return (
        <div className='main1'>
            <div className='whole-div1'>
                <div class="container">
                    <form className='login' onSubmit={handleLogin}>
                        <div class="box">
                            <h1>Login</h1>
                            <input type="text" placeholder="Username" value={username} onChange={(e) => {
                                setUsername(e.target.value)
                            }} />
                            <input type="text" placeholder="Password" value={password} onChange={(e) => {
                                setPassword(e.target.value)
                            }} />
                            <button type='submit'>Login</button>
                            <p>Not a member? <Link to={'/registerpage'} className='text-reset'>Sign Up</Link></p>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}
