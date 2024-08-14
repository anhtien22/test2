import './App.css';
import React, { useState } from "react";
function App() {
  const [phone, setPhone] = useState('');

  const handleInputChange = (e) => {
    let input = e.target.value.replace(/\D/g, '');
    if (input.length > 3 && input.length <= 6) {
      input = `(${input.slice(0, 3)})${input.slice(3)}`;
    } else if (input.length > 6) {
      input = `(${input.slice(0, 3)})${input.slice(3, 6)}-${input.slice(6, 10)}`;
    }

    setPhone(input);
  };

  const handleKeyDown = (e) => {
    const allowedKeys = ['Backspace', 'Delete', 'ArrowLeft', 'ArrowRight'];
    if (!allowedKeys.includes(e.key) && !/^\d$/.test(e.key)) {
      e.preventDefault();
    }
  };

  return (
    <input
      type="text"
      value={phone}
      onChange={handleInputChange}
      onKeyDown={handleKeyDown}
      maxLength="14"
      placeholder="(123)456-7890"
    />
  );
};


export default App;
