import React, { useState } from 'react';
import '../css/NoteBox.css';

const NoteBox = () => {
  const notes = [
    'המטרה היא אינה לא ליפול, אלא לקום כאשר אנחנו נופלים',
    'אתה מפספס 100% מהפוטנציאל שלך כשאתה מוותר',
    
  ];

  const [note, setNote] = useState('');

  const handleClick = () => {
    const randomIndex = Math.floor(Math.random() * notes.length);
    setNote(notes[randomIndex]);
  };

  return (
    <div className="note-box" onClick={handleClick}>
      {note && <div className="note">{note}</div>} {/* Display the note in a box if there is a note */}
      <div className="click-here">מוטיבציה יומית</div> {/* Message to the user */}
    </div>
  );
};

export default NoteBox;
