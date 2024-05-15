import React from 'react';
import '../css/userRegister.css';
import { useNavigate } from "react-router-dom";


function userRegister() {
    const [formData, setFormData] = useState({
        user: null,
        email: null,
        password: null,
        repassword: null
    });

    function updateState(obj) {
        setFormData({ ...formData, [obj.key]: obj.value });
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        try {
            var res = postData(url, {
                user,
                email,
                password,
                repassword
            })
            // console.log(res, 'res');
            navigate('/Register'); // Redirect to the home page

        } catch (error) {
            console.log(error, 'error');
        }

    }


    return (
        <div>
            <h1>Register</h1>
            <div className="form-group">
                <label className="label">User</label>
                <input className="input" type="text" onChange={(e) => updateState({ key: "user", value: e.target.value })} />
            </div>
            <div className="form-group">
                <label className="label">Email</label>
                <input className="input" type="email" onChange={(e) => updateState({ key: "email", value: e.target.value })} />
            </div>
            <div className="form-group">
                <label className="label">Password</label>
                <input className="input" type="password" onChange={(e) => updateState({ key: "password", value: e.target.value })} />
            </div>
            <div className="form-group">
                <label className="label">RePassword</label>
                <input className="input" type="password" onChange={(e) => updateState({ key: "repassword", value: e.target.value })} />
            </div>
            <button onClick={handleSubmit}>Send</button>
        </div>
    );
}
export default userRegister;