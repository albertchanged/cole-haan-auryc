import {useState} from "react";
import './App.css';
import text from "./samples/text";
import logo from "./images/colehaan_logo.png"

import FeedbackFormPage from "./FeedbackFormPage";

// FeedbackFormContainer
  // FeedbackFormPage
    // ./interactions
      // FeedbackFormDropdown
      // FeedbackFormRadio
      // FeedbackFormRating
      // FeedbackFormInput
  // FeedbackFormSubmit

function App() {
  const [pageNumber, setPageNumber] = useState(0);
  const [success, setSuccess] = useState(false);
  const onLastPage = pageNumber === text.pageHeaders.length - 1;
  const goToNextPage = () => {
    setPageNumber(pageNumber => pageNumber + 1);
  }
  const submitFeedback = () => {
    // axios
    //   .post("/api", {
    //     ...data
    //   })
    //   .then(res => {
    //     showSuccess();
    //     console.log(res);
    //   })
    //   .catch(err => {
    //     showError();
    //     console.error(err);
    //   });

    setSuccess(true);
  }
  return (
    <div className="App">
      <header className="App-header">
        <div className="formPage-container">
          <div className="formPage-logo" >
            <img src={logo} alt="Cole Haan logo" />
          </div>
          {
            !success
              ? (
                <>
                  <FeedbackFormPage {...{pageNumber}} />
                  <FeedbackFormFooter {...{onLastPage, submitFeedback, goToNextPage}}/>
                </>
              ) : (
                <div className="formPage-thanks">Success! Your feedback has been submitted.<br/><br/> Thank you for helping us improve our services and provide a better experience for you.</div>
              )
          }
        </div>
      </header>
    </div>
  );
}

const FeedbackFormFooter = ({onLastPage, submitFeedback, goToNextPage}) => {
  return (
    <div className={onLastPage ? "formPage-buttonFooter-submit" : "formPage-buttonFooter"}>
      <button 
        onClick={onLastPage ? submitFeedback : goToNextPage}
      >
        {onLastPage ? "Submit" : "Next"}
      </button>
    </div>
  );
}

export default App;

{/* <p>
COLE HAAN
</p>
        <img src={logo} className="App-logo" alt="logo" />
<a
className="App-link"
href="https://reactjs.org"
target="_blank"
rel="noopener noreferrer"
>
Learn React
</a> */}
