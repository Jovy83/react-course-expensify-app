import { v4 as uuidv4 } from "uuid";
import database from "../firebase/firebase";

// old way, just locally //
// component calls action generator
// action generator return object
// component dispatches object
// redux store changes

// new way, with firebase usage //
// component calls action generator
// action generator returns function
// component dispatch function (?)
// function runs (has the ability to dispatch other actions and do whateve r it wants)

// ADD_EXPENSE
export const addExpense = (expense) => ({
  type: "ADD_EXPENSE",
  expense,
});

export const startAddExpense = (expenseData = {}) => {
  // this function gets called internally by redux
  return (dispatch) => {
    // de-structure
    const {
      description = "",
      note = "",
      amount = 0,
      createdAt = 0,
    } = expenseData;

    const expense = { description, note, amount, createdAt };

    return database
      .ref("expenses")
      .push(expense)
      .then((ref) => {
        dispatch(
          addExpense({
            id: ref.key,
            ...expense,
          })
        );
      });
  };
};

// REMOVE_EXPENSE
export const removeExpense = ({ id } = {}) => ({
  type: "REMOVE_EXPENSE",
  id,
});

// EDIT_EXPENSE
export const editExpense = (id, updates) => ({
  type: "EDIT_EXPENSE",
  id,
  updates,
});
