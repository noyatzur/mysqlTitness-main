import React, { useState } from "react";
import '../css/Register.css'
import { useNavigate } from "react-router-dom";




async function fetchFitnessData() {
    const response = await fetch("http://localhost:3001/users");
    const users = await response.json();
    console.log(users);
}
var url =  "http://localhost:3001/users";

async function postData(url, data = {}) {
    try {
        const response = await fetch(url, {
            method: "POST", // *GET, POST, PUT, DELETE, etc.
            mode: "cors", // no-cors, *cors, same-origin
            cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
            credentials: "same-origin", // include, *same-origin, omit
            headers: {
            "Content-Type": "application/json",
            // 'Content-Type': 'application/x-www-form-urlencoded',
            },
            redirect: "follow", // manual, *follow, error
            referrerPolicy: "no-referrer", // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
            body: JSON.stringify(data), // body data type must match "Content-Type" header
        });
        return response.json(); // parses JSON response into native JavaScript objects

    } catch (error) {
        console.log("error postData", error);
    }
   
}


const Register = () => {
    const navigate = useNavigate();

    const [first_name, setFirst_name] = useState('');
    const [last_name, setLast_name] = useState('');
    const [Birth_day, setBirth_day] = useState('');
    const [height, setHeight] = useState('');
    const [gender, setGender] = useState('');
    const [weight, setWeight] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [rememberMe, setRememberMe] = useState(false);

    var insertData = new Date().toISOString().slice(0, 19).replace('T', ' ')
    var updateData = new Date().toISOString().slice(0, 19).replace('T', ' ')


    const handleSubmit = (e) => {
        e.preventDefault();
        try {
            var res = postData(url,{
            first_name,
            last_name,
            height,
            gender,
            Birth_day,
            weight,
            email,
            password,
            insertData,
            updateData,
            })
            console.log(res, 'res');
            // navigate('/'); // Redirect to the home page

        } catch (error) {
            console.log(error, 'error');
        }
      
    }

    return (
        <div>
            <h1>מעוניינים בשינוי אמיתי לכל החיים ולא רק ל- "תקופת הקיץ"?</h1>
            <h2>תנו לנו להכיר אתכם כדי שניצור יחד את ה "new you" </h2>
            <div className="container2">
                <form onSubmit={handleSubmit}>
                    <label htmlFor="first_name">First Name</label>
                    <input required value={first_name} onChange={(e) => setFirst_name(e.target.value)} type="text" placeholder="What is your First Name" id="first_name" name="first_name" ></input>
                    <label htmlFor="last_name"> Last Name</label>
                    <input required value={last_name} onChange={(e) => setLast_name(e.target.value)} type="text" placeholder="What is your Last Name" id="last_name" name="last_name" ></input>
                    <label htmlFor="Birth_day"> Birth_day</label>
                    <input required value={Birth_day} onChange={(e) => setBirth_day(e.target.value)} type="date"  id="Birth_day" name="Birth_day" min="18" max="120"></input>
                    <label htmlFor="height"> Height</label>
                    <input required value={height} onChange={(e) => setHeight(e.target.value)} type="text" placeholder="ehat is your height" id="height" name="height" ></input>
                    <div>
                        <label> Choose Gender:</label>
                        <div className="gender-options">
                            <input required type="radio" id="male" name="gender" value="male" checked={gender === 'male'} onChange={(e) => setGender(e.target.value)} />
                            <label htmlFor="male">
                                <img src="/img/manIcon.jpg" alt="Male" className="gender-icon" />
                                Male
                            </label>

                            <input required type="radio" id="female" name="gender" value="female" checked={gender === 'female'} onChange={(e) => setGender(e.target.value)} />
                            <label htmlFor="female">
                                <img src="/img/womenIcon.jpg" alt="Female" className="gender-icon" />
                                Female
                            </label>
                        </div>

                    </div>
                    <label htmlFor="weight">Weight</label>
                    <input required value={weight} onChange={(e) => setWeight(e.target.value)} type="text" placeholder="What is your weight" id="weight" name="weight"  ></input>
                    <label htmlFor="email">Email</label>
                    <input required value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder="youremail@gmail.com" id="email" name="email"></input>
                    <label htmlFor="password">Password</label>
                    <input required value={password} onChange={(e) => setPassword(e.target.value)} type="password" placeholder="********" id="password" name="password"></input>
                    
                    <div>
                        <input type="checkbox" id="rememberMe" name="rememberMe" checked={rememberMe} onChange={(e) => setRememberMe(e.target.checked)}></input>
                        <label htmlFor="rememberMe">Remember me</label>
                    </div>
                    <button type="submit">Register here</button>
                </form>
            </div>
        </div>
    )
}
export default Register;
