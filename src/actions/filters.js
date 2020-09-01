// SET_TEXT_FILTER
export const setTextFilter = (text = "") => ({
  type: "SET_TEXT_FILTER",
  text,
});

// SORT_BY_AMOUNT
export const sortByAmount = () => ({
  type: "SORT_BY_AMOUNT",
});

// SORT_BY_DATE
export const sortByDate = () => ({
  type: "SORT_BY_DATE",
});

// SET_START_DATE // no need to set default to undefined because it will be undefined if no value is passed in
export const setStartDate = (startDate) => ({
  type: "SET_START_DATE",
  startDate,
});

// SET_END_DATE
export const setEndDate = (endDate) => ({
  type: "SET_END_DATE",
  endDate,
});
