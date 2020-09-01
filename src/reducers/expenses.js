const expensesReducerDefaultState = [];

export default (state = expensesReducerDefaultState, action) => {
  switch (action.type) {
    case "ADD_EXPENSE":
      // don't use push because it changes the original array
      //   state.push(action.expense)

      // use concat instead which returns a new array
      //   return state.concat(action.expense);

      // you can also use the spread operator which is more versatile than concat. you can add to the beginning or end of the array. or mid
      return [...state, action.expense];

    case "REMOVE_EXPENSE":
      return state.filter((expense) => expense.id !== action.id);

    case "EDIT_EXPENSE":
      return state.map((expense) => {
        if (expense.id === action.id) {
          return {
            ...expense,
            ...action.updates,
          };
        } else {
          return expense;
        }
      });
    default:
      return state;
  }
};
