
import React, { useState } from "react";
import Card from '../components/Card';
import '../css/Login.css'
import {Link } from "react-router-dom";

const Login = () => {
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');
    const [rememberMe, setRememberMe] = useState(false); // State for the checkbox

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(email);
        console.log(rememberMe); 
    }
       
    return (
        <div>
            <h1>יש לכם חשבון?</h1>
            <h2>התחברו כאן</h2>
           
            <div className="container">
                <form onSubmit={handleSubmit}>
                    <label htmlFor="email">Email</label>
                    <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder="youremail@gmail.com" id="email" name="email"></input>
                    <label htmlFor="password">Password</label>
                    <input value={pass} onChange={(e) => setPass(e.target.value)} type="text" placeholder="********" id="password" name="password"></input>
                    <div>
                        <input type="checkbox" id="rememberMe" name="rememberMe" checked={rememberMe} onChange={(e) => setRememberMe(e.target.checked)}></input>
                        <label htmlFor="rememberMe">Remember me</label>
                    </div>
                    <button type="submit">Login</button>
                </form>

                <Link to="/Register">
                    <Card />
                </Link>
            </div>
         
        </div>
      

    )
       
}

export default Login