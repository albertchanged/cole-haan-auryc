 // Headers
const recommend = {
  text: "How likely are you to recommend Cole Haan to a friend or colleague?",
  type: "rating"
},
feedbackGeneralCategory = {
  text: "Please choose a category you would like to leave feedback about.",
  type: "dropdown"
},
websiteGoal = {
  text: "What was your goal for today's visit to ColeHaan.com?",
  type: "dropdown"
},
feedbackProductCategory = {
  text: "What product category would you like to leave feedback about?",
  type: "dropdown"
},
storeLocation = {
  text: "Which store location would you like to leave feedback about?",
  type: "input"
},
contactCustomerService = {
  text: "How did you contact customer service?",
  type: "dropdown"
},
rateCustomerService = {
  text: "How would you rate the service?",
  type: "radio"
},
easeForGoal = {
  text: "How easy was it to accomplish that goal?",
  type: "radio"
},
generalFeedback = {
  text: "Please share your feedback.",
  type: "input"
},
tellUsFeedback = {
  text: "Tell us what you think.",
  type: "input"
};

// Dropdown Options
const ourWebsite = "Our Website",
  ourProducts = "Our Products",
  ourRetailLocations = "Our Retail Locations",
  customerService = "Customer Service",
  colehaan = "Cole Haan, Generally";


const text = {
  // These are currently used in the app
  pageHeaders: [
    "How likely are you to recommend Cole Haan to a friend or colleague?",
    [
      "Please choose a category you would like to leave feedback about.",
      "What was your goal for today's visit to ColeHaan.com?"
    ],
    "How easy was it to accomplish that goal?",
    "Please share your feedback."
  ],
  dropdownOptions: {
    feedbackCategories: [
      "Our Website",
      "Our Products",
      "Our Retail Locations",
      "Customer Service",
      "Cole Haan, Generally"
    ],
    goalCategories: [
      "Browse new arrivals",
      "Find a specific style",
      "Compare products",
      "Browse sale items",
      "Contact Customer Service",
      "Return or exchange an item"
    ]
  },
  easeCategories: [
    "Very Difficult",
    "Difficult",
    "Not Difficult nor Easy",
    "Easy",
    "Very Easy"
  ],
  generalRatingRangeLabels: ["Not at all likely", "Extremely likely"],


  // Brainstorming how to map pages depending on selections
  [recommend.text]: recommend.text,
  [feedbackGeneralCategory.text]: [ourWebsite, ourProducts, ourRetailLocations, customerService, colehaan],

  [ourWebsite]: [websiteGoal, easeForGoal, generalFeedback],
  [ourProducts]: [feedbackProductCategory, tellUsFeedback],
  [ourRetailLocations]: [storeLocation, tellUsFeedback],
  [customerService]: [contactCustomerService, tellUsFeedback, rateCustomerService],
  [colehaan]: [tellUsFeedback],

  initialDropdownOptions: {
    feedbackCategories: {
      "Our Website": {
        headers: [
          "What was your goal for today's visit to ColeHaan.com?",
          "How easy was it to accomplish that goal?",
          "Please share your feedback."
        ],
        nextDropdownOptions: {

        }
      },
      "Our Products": {
        headers: {
          "What product category would you like to leave feedback about?": {
            
          }
        }

      },
      "Our Retail Locations": {},
      "Customer Service": {},
      "Cole Haan, Generally": {}
    },
    goalCategories: [
      "Browse new arrivals",
      "Find a specific style",
      "Compare products",
      "Browse sale items",
      "Contact Customer Service",
      "Return or exchange an item"
    ]
  },
}

export default text;