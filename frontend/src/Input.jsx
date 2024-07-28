import React, { useState } from "react";

export default function Input({ prompt, onPromptChange }){
    const [inputValue, setInputValue] = useState(prompt);

    const handleInputChange = (e) => {
        setInputValue(e.target.value);
      };
    
      const handleKeyDown = (e) => {
        if (e.key === 'Enter') {
          e.preventDefault();
          onPromptChange(inputValue);
        }
      };
    return (
        <div>
        <textarea
        className="textarea textarea-primary w-full"
        placeholder="Translate..."
        value={inputValue}
        onChange={handleInputChange}
        onKeyDown={handleKeyDown}
      ></textarea>
        </div>
    )
}