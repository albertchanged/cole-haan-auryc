import FeedbackFormHeader from "../FeedbackFormPageHeader";
import FeedbackFormRadio from "../interactions/FeedbackFormRadio";

const FeedbackFormEasePage = ({header}) => {
  return (
    <div className="formPage-pageContainer">
      <FeedbackFormHeader header={header} />
      <FeedbackFormRadio/>
    </div>    
  );
}

export default FeedbackFormEasePage;