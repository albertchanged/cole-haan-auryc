import React, {useState} from "react";
import "../App.css";

const FeedbackFormInput = () => {
  const [input, setInput] = useState("");

  const updateInput = (e) => {
    setInput(e.target.value);
  }

  return (
    <div className="formPage_input">
      <textarea value={input} onChange={updateInput} placeholder="Your answer"/>
    </div>
  )
}

export default FeedbackFormInput;