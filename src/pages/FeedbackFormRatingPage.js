import FeedbackFormHeader from "../FeedbackFormPageHeader";
import FeedbackFormRating from "../interactions/FeedbackFormRating";

const FeedbackFormRatingPage = ({header, required, enableButton, rangeLabels}) => {
  return (
    <div className="formPage-pageContainer">
      <FeedbackFormHeader header={header} required={required} />
      <FeedbackFormRating enableButton={enableButton} rangeLabels={rangeLabels} />
    </div>
  );
}

export default FeedbackFormRatingPage;