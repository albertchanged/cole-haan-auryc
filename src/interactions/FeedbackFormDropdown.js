import {useState} from "react";

const FeedbackFormDropdown = ({dropdownOptions}) => {
  const [currentOption, setCurrentOption] = useState("Choose...");

  const selectOption = (e) => {
    const selectedOption = e.target.value;
    setCurrentOption(selectedOption);
  }

  return (
    <select value={currentOption} id="categoryDropdown" onChange={selectOption}>
      <option>Choose...</option>
      {dropdownOptions.map((option, i) => {
        return (<option value={option} key={i}>{option}</option>)
      })}
    </select>
  );
}

export default FeedbackFormDropdown;