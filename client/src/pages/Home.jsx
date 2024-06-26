import React from 'react';
import Card from '../components/Card';
import '../css/Home.css';
import {Link } from "react-router-dom";

const Home = () => {
  return (
    <div className='body'>
      <h1>"אני לא מאמין שאתם צריכים להיות טובים יותר מכל האחרים,אתם צריכים להיות טובים יותר משחשבתם שאי פעם תוכלו להיות"-
        -קן ונטורי
      </h1>
    <div>
        <figure>
          <img src='./img/homeImg.jpg'></img>
        </figure>
        <figcaption>Owner, Noya Tzur.</figcaption>

        <p>
          לאורך שנות חיי תמיד היו לי בעיות עם הנראות שלי, משקל הגוף שלי והכל בעקבות הנורמות החברתיות שהכתיבו לנו. 
          <br></br>
          תמיד הייתי בחורה ספורטיבית, הייתי רקדנית מקצועית ותמיד ספורט היה חלק ממני אבל אף פעם לא חייתי <strong> אורח חיים בריא.</strong> 
          
          <br></br>
         <strong>"אורח חיים בריא"- מה זה אומר?
            </strong>לחיות על פירות וירקות ללא פחמימות ורק חלבונים כל היום?,ללא יציאות מהשגרה?, ללא משהו מתוק ככה עם הקפה בבוקר? ללא הקפה בבוקר בגלל החלב?
          <br></br>
          <strong>אז זהו ש... ממש לא!-</strong>
          <br></br>
          השנים עברו ומילדה לנערה שחיה עם הפרעות אכילה ותחושה כללית לא טובה על אוכל גדלתי להיות אישה שמנהלת אורח חיים בריא, טוב.. אני חוזרת על שלושת המילים האלו יותר מדיי פעמים מבלי באמת להסביר את הכוונה שלי אז אני אסכם 
        אורח חיים בריא זה לאכול את כל מה שהגוף שלי זקוק לו, להזמין אותו בכל אבות המזון וכן גם במתוקים מבלי להתבייש. לחיות אורח חיים בריא זה אומר שאני מנהלת את הגוף שלי ולא הוא מנהל אותי - זה אומר לקום ולהתאמן ולחזק את הגוף שלי בצורה המקסימלית שאני יכולה לעשות וככל שאני אתן לגוף שלי טוב כך אני אקבל ממנו טוב בחזרה.
        <br></br>
        בגדול, אורח חיים בריא הוא לדעת לשלב את כל מה שאנחנו אוהבים בחיי היום-יום שלנו לאורח זמן ממושך ולא למשהו תקופתי שנקרא "דיאטה" -אני רוצה לשתף כמה שיותר את כל הידע שלרכשתי על איך באמת אפשר לקיים אורח חיים בריא עם כל הפיתויים שיש מסביב- עם החופשות, השבתות והחגים , יציאות מהשגרה כמו מסעדות ומסיבות ולדעת איך לא לסבול ב- "דיאטה" אלא ללמוד לסגל את התהליך כאורח חיים בריא- בשביל עצמכם, בשביל ההרגשה העצמית שלכם, ובעיקר בשבי הגוף שלכם.
        <br></br>
        <strong>
        תאמינו לי, הוא יודה לכם...</strong>
        </p>

      </div>
      <Link to="/Register">
        <Card />
      </Link>


    </div>
  )
}

export default Home 