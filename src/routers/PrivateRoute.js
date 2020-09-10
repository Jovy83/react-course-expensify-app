import React from "react";
import { connect } from "react-redux";
import { Route, Redirect } from "react-router-dom";
import Header from "../components/Header";

// export const PrivateRoute = ({
//   isAuthenticated,
//   component: Component,
//   ...rest
// }) => <Route {...rest} component={() => ({

// })} />;

export const PrivateRoute = (props) => {
  const { isAuthenticated, component: Component, ...rest } = props;

  return (
    <Route
      {...rest}
      component={(
        props // props here are all the props passed to Route via ...rest
      ) =>
        isAuthenticated ? (
          <div>
            <Header />
            <Component {...props} />
            {/* we pass props to the component so that it would get what it would normally get when used with <Route>, like history prop etc. */}
          </div>
        ) : (
          <Redirect to="/" />
        )
      }
    />
  );
};

const mapStateToProps = (state) => ({
  isAuthenticated: !!state.auth.uid, // if this exists, then we know we are authenticated
});

export default connect(mapStateToProps)(PrivateRoute);
