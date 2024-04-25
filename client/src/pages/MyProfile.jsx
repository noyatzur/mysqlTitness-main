import React from 'react';
import Card2 from '../components/CardLogin';
import { Link } from "react-router-dom";
import NoteBox from '../components/Box';

const MYProfile = () => {
    return (
        <div>
            <div>
                <NoteBox />
            </div>
            <div>
                <Link to="/Login">
                    <Card2 />
                </Link>
            </div>
        </div>

    )
}
export default MYProfile;