const text = {
  pageHeaders: [
    "How likely are you to recommend Cole Haan to a friend or colleague?",
    [
      "Please choose a category you would like to leave feedback about.",
      "What was your goal for today's visit to ColeHaan.com?"
    ],
    "How easy was it to accomplish that goal?",
    "Please share your feedback."
  ],
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
  ]
}

module.exports = text;