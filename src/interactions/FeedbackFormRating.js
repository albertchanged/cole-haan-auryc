import React, {useState} from "react";
import "../App.css";

const ratingNumbers = Array.from(Array(10).keys());

const FeedbackFormRating = () => {
  const [rating, setRating] = useState(ratingNumbers[0]);

  const selectRating = (e) => {
    e.preventDefault();
    console.log(e);
    setRating(e.target.innerText);
  }

  console.log(rating);
  return (
    <div className="formPage-ratingContainer">
      {
        ratingNumbers.map((number) => {
          return (
              <button
                key={number}
                onClick={selectRating}
              >
                {number}
              </button>
          );
        })
      }
    </div>
  )
}

export default FeedbackFormRating;