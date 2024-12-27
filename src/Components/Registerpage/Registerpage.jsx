import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'

export default function Registerpage() {

    const navi = useNavigate()

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [phone, setPhone] = useState('');
    const [email, setEmail] = useState('');


    function handleSubmit(e) {
        e.preventDefault()
       
        axios.post('http://localhost:4000/kiru/post',{
            username:username,password:password,phone:phone,email:email
        }).then(()=>{
            navi('/login')
        })
        .catch(err=>console.log(err))

    }
    return (
        <div>
            <div class="register"  style={{ width: "100vw" }}>
                <form className='login' onSubmit={handleSubmit} style={{ margin: "180px auto 0", height: "560px" }}>
                    <div class="box">
                        <h1>Register</h1>
                        <input type="text" placeholder="Username"  value={username} onChange={(e) =>{
                            setUsername(e.target.value)
                        }}/>
                        <input type="text" placeholder="Email" value={email} onChange={(e) =>{
                            setEmail(e.target.value)
                        }}/>
                        <input type="text" placeholder="Phone" value={phone} onChange={(e) =>{
                            setPhone(e.target.value)
                        }}/>
                        <input type="text" placeholder="Password" value ={password} onChange={(e) =>{
                            setPassword(e.target.value)
                        }} />
                        <button type='submit'>Register</button>
                        <p>Have Account? <Link to={'/login'} className='text-reset'>Sign In</Link></p>
                    </div>
                </form>
            </div>
        </div>
    )
}
