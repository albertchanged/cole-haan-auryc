import {useState} from "react";
import text from "../samples/text.js";
import "../App.css";

const FeedbackFormRadio = () => {
  const [ease, setEase] = useState("");

  const selectEase = (e) => {
    setEase(e.target.value)
  }

  return (
    <div className="formPage-radioContainer" onChange={selectEase}>
      {text.easeCategories.map((category, i) => {
        return (
          <div className="formPage-radio" key={i} >
            <input type="radio" id={category} name="ease" value={category}/>
            {category}
          </div>)
      })}
    </div>
  )
}

export default FeedbackFormRadio;