import React from 'react';
import { Link } from 'react-router-dom';
import gymImage from '/img/gymImage.jpg'; // Import your gym or workout image here
import '../css/ThankYou.css';

const ThankYou = () => {
    return (
        <div className="thank-you-container">
            <div className="thank-you-content">
                <h1>תודה רבה על הרישום!</h1>
                <p>!אנו מעריכים את הצטרפותך לקהילתנו
                    ממש בעוד רגע נצא יחד למסע משנה חיים..
                </p>
                <p>
                    <span className="arrow">➜</span> עכשיו ניתן לעבור לדף הפרופיל שלך:
                    <Link to="/MyProfile">פרופיל משתמש</Link>
                </p>
            </div>
            <div className="gym-image-container">
                <img src={gymImage} alt="Gym" className="gym-image" />
            </div>
        </div>
    );
};

export default ThankYou;
