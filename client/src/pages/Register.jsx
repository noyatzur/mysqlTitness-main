import React, { useState } from "react";
import '../css/Register.css'
import { Link } from "react-router-dom";



const Register = () => {
    const [first_name, setFirst_name] = useState('');
    const [last_name, setLast_name] = useState('');
    const [age, setAge] = useState('');
    const [height, setHeight] = useState('');
    const [gender, setGender] = useState('');
    const [weight, setWeight] = useState('');
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');
    const [active, setActive] = useState('');
    const [rememberMe, setRememberMe] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(first_name);
        console.log(last_name);
        console.log(age);
        console.log(height);
        console.log(gender);
        console.log(weight);
        console.log(email);
        console.log(pass);
        console.log(active);
        console.log(rememberMe);
    }

    return (
        <div>
            <h1>מעוניינים בשינוי אמיתי לכל החיים ולא רק ל- "תקופת הקיץ"?</h1>
            <h2>תנו לנו להכיר אתכם כדי שניצור יחד את ה "new you" </h2>
            <div className="container2">
                <form onSubmit={handleSubmit}>
                    <label htmlFor="first_name">First Name</label>
                    <input value={first_name} onChange={(e) => setFirst_name(e.target.value)} type="text" placeholder="What is your First Name" id="first_name" name="first_name" ></input>
                    <label htmlFor="last_name"> Last Name</label>
                    <input value={last_name} onChange={(e) => setLast_name(e.target.value)} type="text" placeholder="What is your Last Name" id="last_name" name="last_name" ></input>
                    <label htmlFor="age"> Age</label>
                    <input value={age} onChange={(e) => setAge(e.target.value)} type="number" placeholder="What is your age?" id="age" name="age" min="18" max="120"></input>
                    <label htmlFor="height"> Height</label>
                    <input value={height} onChange={(e) => setHeight(e.target.value)} type="text" placeholder="ehat is your height" id="height" name="height" ></input>
                    <div>
                        <label> Choose Gender:</label>
                        <div className="gender-options">
                            <input type="radio" id="male" name="gender" value="male" checked={gender === 'male'} onChange={(e) => setGender(e.target.value)} />
                            <label htmlFor="male">
                                <img src="/img/manIcon.jpg" alt="Male" className="gender-icon" />
                                Male
                            </label>

                            <input type="radio" id="female" name="gender" value="female" checked={gender === 'female'} onChange={(e) => setGender(e.target.value)} />
                            <label htmlFor="female">
                                <img src="/img/womenIcon.jpg" alt="Female" className="gender-icon" />
                                Female
                            </label>
                        </div>

                    </div>
                    <label htmlFor="weight">Weight</label>
                    <input value={weight} onChange={(e) => setWeight(e.target.value)} type="text" placeholder="What is your weight" id="weight" name="weight"  ></input>
                    <label htmlFor="email">Email</label>
                    <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder="youremail@gmail.com" id="email" name="email"></input>
                    <label htmlFor="password">Password</label>
                    <input value={pass} onChange={(e) => setPass(e.target.value)} type="password" placeholder="********" id="password" name="password"></input>
                    <label htmlFor="active"> Are you active?</label>
                    <div className="active-options">
                        <input type="radio" id="yes" name="active" value="yes" checked={active === 'yes'} onChange={(e) => setActive(e.target.value)}></input>
                        <label htmlFor="yes">Yes</label>
                        <input type="radio" id="no" name="active" value="no" checked={active === 'no'} onChange={(e) => setActive(e.target.value)}></input>
                        <label htmlFor="no">No</label>
                    </div>

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
