const FeedbackFormHeader = ({header, required}) => (
  <h3 className="formPage-page-header">
    {header}{required && <span style={{color: "red"}}> *</span>}
  </h3>
);

export default FeedbackFormHeader;