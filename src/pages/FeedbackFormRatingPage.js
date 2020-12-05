import FeedbackFormHeader from "../FeedbackFormPageHeader";
import FeedbackFormRating from "../interactions/FeedbackFormRating";

const FeedbackFormRatingPage = ({header, required, enableButton}) => {
  return (
    <div className="formPage-pageContainer">
      <FeedbackFormHeader header={header} required={required} />
      <FeedbackFormRating enableButton={enableButton} />
    </div>
  );
}

export default FeedbackFormRatingPage;