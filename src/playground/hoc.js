// Higher Order Component = A component that renders another component
// Reuse code
// Render hijacking
// Prop manipulation
// Abstract state

import React from "react";
import ReactDOM from "react-dom";

const Info = (props) => (
  <div>
    <h1>Info</h1>
    <p>The info is: {props.info}</p>
  </div>
);

const withAdminWarning = (WrappedComponent) => {
  // return a new component. this is the higher order component
  return (props) => (
    <div>
      {props.isAdmin && <p>This is private info. Please don't share!</p>}

      <WrappedComponent {...props} />
      {/* ...props above has the effect of taking eveyr key value pair on that object and passing them down as props */}
      {/* we're taking all of the props passed into the hoc and we're just passing them directly down to the child  */}
    </div>
  );
};

const requireAuthentication = (WrappedComponent) => {
  return (props) => (
    <div>
      {props.isAuthenticated ? (
        <WrappedComponent {...props} />
      ) : (
        <p>Please login to view the info</p>
      )}
    </div>
  );
};

const AdminInfo = withAdminWarning(Info);
const AuthInfo = requireAuthentication(Info);

// ReactDOM.render(
//   <AdminInfo isAdmin={true} info="gago" />,
//   document.getElementById("app")
// );

ReactDOM.render(
  <AuthInfo isAuthenticated={false} info="gago" />,
  document.getElementById("app")
);
