import FeedbackFormHeader from "../FeedbackFormPageHeader";
import FeedbackFormDropdown from "../interactions/FeedbackFormDropdown";

const FeedbackFormCategoryPage = ({headers, feedbackCategories, goalCategories}) => {
  const [header1, header2] = headers;
  return (
    <div className="formPage-pageContainer">
      <FeedbackFormHeader header={header1} />
      <FeedbackFormDropdown dropdownOptions={feedbackCategories}/>
      <FeedbackFormHeader header={header2} />
      <FeedbackFormDropdown dropdownOptions={goalCategories}/>
    </div>    
  );
}

export default FeedbackFormCategoryPage;