import React from "react";
import "./App.css";
import text from "./samples/text.js";

import FeedbackFormRatingPage from "./pages/FeedbackFormRatingPage";
import FeedbackFormCategoryPage from "./pages/FeedbackFormCategoryPage";
import FeedbackFormEasePage from "./pages/FeedbackFormEasePage";
import FeedbackFormInputPage from "./pages/FeedbackFormInputPage";

const FeedbackFormPage = ({pageNumber, enableButton}) => {
  const pageHeaders = text.pageHeaders;
  const currentHeader = pageHeaders[pageNumber];

  const {feedbackCategories, goalCategories} = text.dropdownOptions;
  
  switch (pageNumber) {
    case 0:
      return (
        <FeedbackFormRatingPage
          header={currentHeader}
          required={true}
          enableButton={enableButton}
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
