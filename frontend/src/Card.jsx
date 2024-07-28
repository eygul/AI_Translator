import React, { useState, useEffect } from "react";

export default function Card({prompt, task}){
    const [message, setMessage] = useState("");
    const [buttonText, setButtonText] = useState("Copy");
    const [buttonClass, setButtonClass] = useState("btn btn-primary w-full");
    
    useEffect(() => {
      if (prompt && task){
        const requestBody = JSON.stringify({
          task: task,
          prompt: prompt,
        });

        fetch("http://localhost:5000/", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: requestBody,
        })
          .then((res) => res.json())
          .then((data) => setMessage(data.response));
      }
      }, [prompt, task]);
      console.log(typeof message)

      const handleCopy = () => {
        navigator.clipboard.writeText(message).then(() => {
          setButtonText("Translation copied");
          setButtonClass("btn btn-success w-full");
          setTimeout(() => {
            setButtonText("Copy");
            setButtonClass("btn btn-primary w-full");
          }, 2000);
        });
      };

      if (task == "translation_en_to_de"){
        document.title = "English to German";
      }
      else if (task == "translation_en_to_fr"){
        document.title = "English to French";
      }
      else{
        document.title = "English to Romanian";
      }

    return(
      <>
        <div className="card bg-neutral text-neutral-content w-full">
            <div className="card-body items-center text-center">
                <h2 className="card-title">Translation:</h2>
                <p>{message}</p>
                <div className="card-actions justify-end">
                </div>
            </div>
        </div>
        <button className={buttonClass} onClick={handleCopy}>{buttonText}</button>
        </>
    )
}