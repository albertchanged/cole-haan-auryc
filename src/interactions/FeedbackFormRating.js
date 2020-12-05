import {useState} from "react";
import "../App.css";

const ratingNumbers = Array.from(Array(11).keys());

const FeedbackFormRating = ({enableButton}) => {
  const [rating, setRating] = useState();

  const selectRating = (e) => {
    e.preventDefault();
    setRating(e.target.innerText);
    enableButton();
  }

  // With more time, I would use a radio for these buttons instead
  // That way, the button would stay clicked
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