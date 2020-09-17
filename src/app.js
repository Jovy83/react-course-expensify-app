import React from "react";
import ReactDOM from "react-dom";
import AppRouter, { history } from "./routers/AppRouter";

import { Provider } from "react-redux";

import configureStore from "./store/configureStore";
import { startSetExpenses } from "./actions/expenses";
import { login, logout } from "./actions/auth";
import getVisibleExpenses from "./selectors/expenses";

import "normalize.css/normalize.css";
import "./styles/styles.scss";
import "react-dates/lib/css/_datepicker.css";

import { firebase } from "./firebase/firebase";
import LoadingPage from "./components/LoadingPage";

const store = configureStore();
// store.dispatch(addExpense({ description: "water bill", amount: 4500 }));
// store.dispatch(addExpense({ description: "gas bill", createdAt: 1000 }));
// store.dispatch(addExpense({ description: "rent", amount: 109500 }));

// const state = store.getState();
// const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);
// console.log(visibleExpenses);

const jsx = (
  <Provider store={store}>
    <AppRouter />
  </Provider>
);

let hasRendered = false;
const renderApp = () => {
  if (!hasRendered) {
    ReactDOM.render(jsx, document.getElementById("app"));
    hasRendered = true;
  }
};

ReactDOM.render(<LoadingPage />, document.getElementById("app"));

firebase.auth().onAuthStateChanged((user) => {
  if (user) {
    console.log("log in", user.uid);

    store.dispatch(login(user.uid));

    // only fetch expenses if user is login
    store.dispatch(startSetExpenses()).then(() => {
      renderApp();

      // only redirect to dashboard if user is still in root path
      if (history.location.pathname === "/") {
        history.push("/dashboard");
      }
    });
  } else {
    console.log("log out");
    store.dispatch(logout());
    renderApp();
    history.push("/");
  }
});
