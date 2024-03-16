import React from "react";

function Alert({ alert, capitalize }) {
  return (
    <>
      {alert && (
        <div
          className={`alert alert-${alert.type} alert-dismissible fade show`}
          role="alert"
        >
          <strong>
            {capitalize(alert.type)} : {alert.msg}
          </strong>
        </div>
      )}
    </>
  );
}

export default Alert;
