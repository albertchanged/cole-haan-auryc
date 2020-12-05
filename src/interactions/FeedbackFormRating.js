import {useState} from "react";
import "../App.css";

const ratingNumbers = Array.from(Array(11).keys());

const FeedbackFormRating = ({enableButton, rangeLabels}) => {
  const [rating, setRating] = useState();
  const [bottomRange, topRange] = rangeLabels;

  const selectRating = (e) => {
    e.preventDefault();
    setRating(e.target.innerText);
    enableButton();
  }

  // With more time, I would use a radio for these buttons instead
  // That way, the button would stay clicked
  return (
    <>
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
      <div className="formPage-ratingContainer-rangeLabels">
        <div>Not at all likely</div>
        <div>Extremely likely</div>
      </div>
    </>
  )
}

export default FeedbackFormRating;