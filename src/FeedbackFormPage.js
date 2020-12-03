import React from "react";
import "./App.css";
import text from "./samples/text.js";
import FeedbackFormDropdown from "./interactions/FeedbackFormDropdown";
import FeedbackFormRating from "./interactions/FeedbackFormRating";
import FeedbackFormRadio from "./interactions/FeedbackFormRadio";
import FeedbackFormInput from "./interactions/FeedbackFormInput";

const FeedbackFormPage = ({pageNumber}) => {
  console.log("Hi", pageNumber)
  console.log(text.pageHeaders);
  const pageHeaders = text.pageHeaders;
  const {feedbackCategories, goalCategories} = text.dropdownOptions;
  const currentHeader = pageHeaders[pageNumber];
  switch (pageNumber) {
    case 0:
      return (
        <FeedbackFormRatingPage
          header={currentHeader}
        />
      );
    case 1:
      return (
        <FeedbackFormCategoryPage
          headers={currentHeader}
          feedbackCategories={feedbackCategories}
          goalCategories={goalCategories}
        />
      );
    case 2:
      return (
        <FeedbackFormEasePage
          header={currentHeader}
        />
      );
    case 3:
      return (
        <FeedbackFormInputPage
          header={currentHeader}
        />
      );
    default:
      return (<div/>)
  }
}

export default FeedbackFormPage;

const FeedbackFormRatingPage = ({header}) => {
  return (
    <div className="formPage-pageContainer">
      <h3 className="formPage-page-header">
        {header}
      </h3>
      <FeedbackFormRating/>
    </div>
  );
}

const FeedbackFormCategoryPage = ({headers, feedbackCategories, goalCategories}) => {
  const [header1, header2] = headers;
  return (
    <div className="formPage-pageContainer">
      <h3 className="formPage-page-header">
        {header1}
      </h3>
      <FeedbackFormDropdown dropdownOptions={feedbackCategories}/>
      <h3 className="formPage-page-header" style={{marginTop: "3%"}}>
        {header2}
      </h3>
      <FeedbackFormDropdown dropdownOptions={goalCategories}/>
    </div>    
  );
}

// const FeedbackFormGoalPage = ({header, dropdownOptions}) => {
//   return (
//     <div className="formPage-pageContainer">
//       <h3 className="formPage-page-header">
//         {header}
//       </h3>
//       <FeedbackFormDropdown dropdownOptions={dropdownOptions}/>
//     </div>    
//   );
// }

const FeedbackFormEasePage = ({header}) => {
  return (
    <div className="formPage-pageContainer">
      <h3 className="formPage-page-header">
        {header}
      </h3>
      <FeedbackFormRadio/>
    </div>    
  );
}

const FeedbackFormInputPage = ({header}) => {
  return (
    <div className="formPage-pageContainer">
      <h3 className="formPage-page-header">
        {header}
      </h3>
      <FeedbackFormInput/>
    </div>    
  );
}