const propertyTypeList = {
  less_5000: {
    id: "less_5000",
    value: "Property valued $5000 or less"
  },
  above_5000: {
    id: "above_5000",
    value: "Property valued $5000 or more"
  }
};

const propertyCategoryList = {
  art: {
    id: "art",
    value: "Art"
  },
  qcc: {
    id: "qcc",
    value: "Qualified conservation"
  },
  equipment: {
    id: "equipment",
    value: "Equipment"
  },
  real_estate: {
    id: "real_estate",
    value: "Other real estate"
  },
  securities: {
    id: "securities",
    value: "Securities"
  },
  collectibles: {
    id: "collectibles",
    value: "Collectibles"
  },
  intellectual: {
    id: "intellectual",
    value: "Intellectual property"
  },
  vehicles: {
    id: "vehicles",
    value: "Vehicles"
  },
  others: {
    id: "others",
    value: "Others"
  }
};

const activityList = {
  teaching: {
    id: "teaching",
    value: "Teaching"
  },
  gardening: {
    id: "gardening",
    value: "Gardening"
  },
  foot_ball_coaching: {
    id: "foot_ball_coaching",
    value: "Football coaching"
  }
};

const timeList = {
  0: {
    id: " ",
    value: " "
  },
  1: {
    id: "1",
    value: "1 hr"
  },
  2: {
    id: "2",
    value: "2 hrs"
  },
  3: {
    id: "3",
    value: "3 hrs"
  },
  4: {
    id: "4",
    value: "4 hrs"
  },
  5: {
    id: "5",
    value: "5 hrs"
  },
  6: {
    id: "6",
    value: "6 hrs"
  },
  7: {
    id: "7",
    value: "7 hrs"
  },
  8: {
    id: "8",
    value: "8 hrs"
  },
  9: {
    id: "9",
    value: "9 hrs"
  },
  10: {
    id: "10",
    value: "10 hrs"
  },
  11: {
    id: "11",
    value: "11 hrs"
  },
  12: {
    id: "12",
    value: "12 hrs"
  },
  13: {
    id: "13",
    value: "13 hrs"
  },
  14: {
    id: "14",
    value: "14 hrs"
  },
  15: {
    id: "15",
    value: "15 hrs"
  },
  16: {
    id: "16",
    value: "16 hrs"
  },
  17: {
    id: "17",
    value: "17 hrs"
  },
  18: {
    id: "18",
    value: "18 hrs"
  },
  19: {
    id: "19",
    value: "19 hrs"
  },
  20: {
    id: "20",
    value: "20 hrs"
  },
  21: {
    id: "21",
    value: "21 hrs"
  },
  22: {
    id: "22",
    value: "22 hrs"
  },
  23: {
    id: "23",
    value: "23 hrs"
  },
  24: {
    id: "24",
    value: "24 hrs"
  }
};

const expenseTypeList = {
  mileage: {
    id: "mileage",
    value: "Mileage"
  },
  airfare: {
    id: "airfare",
    value: "Airfare"
  },
  lodging: {
    id: "lodging",
    value: "Lodging"
  },
  transportation: {
    id: "transportation",
    value: "Transportation"
  },
  other: {
    id: "other",
    value: "Other"
  }
};

const paymentTypeList = {
  card: {
    id: "card",
    value: "Credit Card"
  }
  // ach: {
  //   id: "ach",
  //   value: "ACH (Bank account)"
  // }
};

const paymentMethodList = {
  cash: {
    id: "cash",
    value: "Cash"
  },
  e_check: {
    id: "e_check",
    value: "E-Check"
  },
  credit_card: {
    id: "credit_card",
    value: "Credit Card"
  },
  paypal: {
    id: "paypal",
    value: "Paypal"
  },
  cryptocurrency: {
    id: "cryptocurrency",
    value: "Cryptocurrency"
  },  
  other: {
    id: "other",
    value: "Other"
  }
};

const accountTypeList = {
  individual: {
    id: "individual",
    value: "Individual"
  },
  company: {
    id: "company",
    value: "Company"
  }
};

const reportTypeList = {
  contributions: {
    id: "contributions",
    value: "Contributions"
  },
  grants: {
    id: "grants",
    value: "Grants"
  }
};

const reportMethodList = {
  all: {
    id: "all",
    value: "All"
  },
  cash: {
    id: "cash",
    value: "Cash"
  },
  non_cash: {
    id: "non_cash",
    value: "Non-cash"
  }
};

const methodList = {
  cash_contributions: {
    id: "cash_contributions",
    value: "Cash contributions"
  },
  non_cash_contributions: {
    id: "non_cash_contributions",
    value: "Non-cash contributions"
  },
  grants: {
    id: "grants",
    value: "Grants"
  },
  cash_grants: {
    id: "cash_grants",
    value: "Direct cash grants"
  },
  non_cash_grants: {
    id: "non_cash_grants",
    value: "Direct Non-cash grants"
  }
};

export {
  propertyCategoryList,
  propertyTypeList,
  activityList,
  timeList,
  expenseTypeList,
  paymentMethodList,
  paymentTypeList,
  accountTypeList,
  reportTypeList,
  reportMethodList,
  methodList
};
