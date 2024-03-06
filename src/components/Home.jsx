import React, { useState } from 'react';

export default function Home() {
  const [textInput, setTextInput] = useState('');
  const [displayText, setDisplayText] = useState('');

  const handleChange = (e) => {
    setTextInput(e.target.value);
  };

  const submitBtn = (e) => {
    e.preventDefault();
    setDisplayText(textInput);
    setTextInput('');// Set displayText to the value of textInput
  };

  return (
    <div>
      
      <div className='textHere'>{displayText}</div> {/* Display the displayText */}
     
      <form>
       <level><h1>Data</h1></level>
        <input 
          type="text" 
          value={textInput} 
          onChange={handleChange} 
        />
        <button onClick={submitBtn}>submit</button> {/* Pass the function reference */}
      </form>
    </div>
  );
}
