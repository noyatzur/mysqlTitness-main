
import React, { useState } from "react";
import Card from '../components/Card';
import '../css/Login.css'
import {Link } from "react-router-dom";

async function fetchUserByEmal(email) {
    const response = await fetch(`http://localhost:3001/users/${email}`);
    const user = await response.json();
    return user;
}

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [rememberMe, setRememberMe] = useState(false); // State for the checkbox

     const handleSubmit = async (e) => {
        e.preventDefault();
        var user = await fetchUserByEmal(email);
        if (user.data.length > 0) {
            console.log(user && user , "user.data");
            
        } else {
            console.log("user not found");
        }
    }
       
    return (
        <div>
            <h1>יש לכם חשבון?</h1>
            <h2>התחברו כאן</h2>
           
            <div className="container">
                <form onSubmit={handleSubmit}>
                    <label htmlFor="email">Email</label>
                    <input required value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder="youremail@gmail.com" id="email" name="email"></input>
                    <label htmlFor="password">Password</label>
                    <input required value={password} onChange={(e) => setPassword(e.target.value)} type="text" placeholder="********" id="password" name="password"></input>
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