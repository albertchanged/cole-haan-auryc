import FeedbackFormHeader from "../FeedbackFormPageHeader";
import FeedbackFormInput from "../interactions/FeedbackFormInput";

const FeedbackFormInputPage = ({header}) => {
  return (
    <div className="formPage-pageContainer">
      <FeedbackFormHeader header={header} />
      <FeedbackFormInput/>
    </div>    
  );
}

export default FeedbackFormInputPage;