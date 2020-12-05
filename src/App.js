import {useState} from "react";
import './App.css';
import text from "./samples/text";
import logo from "./images/colehaan_logo.png"

import FeedbackFormPage from "./FeedbackFormPage";

// FeedbackFormContainer
  // FeedbackFormPage
    // ./pages
      // FeedbackFormCategoryPage
      // FeedbackFormEasePage
      // FeedbackFormInputPage,
      // FeedbackFormRatingPage
    // ./interactions
      // FeedbackFormDropdown
      // FeedbackFormRadio
      // FeedbackFormRating
      // FeedbackFormInput

function App() {
  const [pageNumber, setPageNumber] = useState(0);
  const [buttonEnabled, setButtonEnabled] = useState(false); 
  const [success, setSuccess] = useState(false);

  const onFirstPage = pageNumber === 0;
  const onLastPage = pageNumber === text.pageHeaders.length - 1;

  const goToPreviousPage = () => {
    setPageNumber(pageNumber => pageNumber - 1);
  }
  const goToNextPage = () => {
    setPageNumber(pageNumber => pageNumber + 1);
  }
  const enableButton = () => {
    setButtonEnabled(true);
  }
  const submitFeedback = () => {
    // Insert POST request here
    setSuccess(true);
  }

  return (
    <div className="App">
      <header className="App-header">
        <div className="formPage-container">
          <div className="formPage-logo">
            <img src={logo} alt="Cole Haan logo" />
          </div>
          {onFirstPage && <FeedbackFormPageRequired />}
          {
            !success
              ? (
                <>
                  <FeedbackFormPage {...{pageNumber, enableButton}} />
                  <FeedbackFormFooter
                    {...{buttonEnabled, onFirstPage, onLastPage, submitFeedback, goToPreviousPage, goToNextPage}}
                  />
                </>
              ) : (
                <div className="formPage-thanks">
                  Success! Your feedback has been submitted.<br/><br/> Thank you for helping us improve our services and provide a better experience for you.
                </div>
              )
          }
        </div>
      </header>
    </div>
  );
}

const FeedbackFormPageRequired = () => {
  return (
    <div className="formPage-page-header-required">
      <p>
        <span style={{color: "red"}}>*</span> <em>Required fields</em>
      </p>
    </div>
  )
}

const FeedbackFormFooter = ({buttonEnabled, onFirstPage, onLastPage, submitFeedback, goToPreviousPage, goToNextPage}) => {
  return (
    <div className="formPage-buttonFooterContainer">
      <div className="formPage-buttonFooter-back">
        {!onFirstPage && (
          <button onClick={goToPreviousPage}>
            Back
          </button>
        )}
      </div>
      <div
        className={
          onLastPage
            ? "formPage-buttonFooter-submit"
            : buttonEnabled
              ? "formPage-buttonFooter-next"
              : "formPage-buttonFooter-next-disabled"
        }
      >
        <button 
          onClick={onLastPage ? submitFeedback : goToNextPage}
          disabled={!buttonEnabled}
        >
          {onLastPage ? <strong>Submit</strong> : "Next"}
        </button>
      </div>
    </div>
  );
}

export default App;
