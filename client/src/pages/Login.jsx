
import React, { useState } from "react";
import Card from '../components/Card';
import '../css/Login.css'
import {Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

async function fetchUserByEmal(email) {
    const response = await fetch(`http://localhost:3002/users/${email}`);
    const user = await response.json();
    return user;
}

const Login = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [rememberMe, setRememberMe] = useState(false); // State for the checkbox

     const handleSubmit = async (e) => {
        e.preventDefault();
        var user = await fetchUserByEmal(email);
        if (user.data.length > 0) {
            console.log(user && user , "user.data");
            navigate('/MyProfile');
        } else {
            console.log("user not found");
            console.log("register now");
            navigate('/Register');
        
        }
    }
       
    return (
        <div>
            <h1>יש לכם חשבון?</h1>
            <h2>התחברו כאן</h2>
           
            <div className="container">
                <form onSubmit={handleSubmit}>
                    <div>
                    <label htmlFor="email">Email</label>
                    <input required value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder="youremail@gmail.com" id="email" name="email"></input>
                    </div>
                    <div>
                    <label htmlFor="password">Password</label>
                    <input required value={password} onChange={(e) => setPassword(e.target.value)} type="text" placeholder="********" id="password" name="password"></input>
                    </div>
                    <div>
                        <label htmlFor="rememberMe">Remember me</label>
                        <input type="checkbox" id="rememberMe" name="rememberMe" checked={rememberMe} onChange={(e) => setRememberMe(e.target.checked)}></input>
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