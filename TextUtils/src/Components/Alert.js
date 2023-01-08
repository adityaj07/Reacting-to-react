import React from "react";

const Alert = (props) => {
  //this function capatalizes the first letter of a word. We created it so we can capatalize the first letter of the alert type (success)
  const capatalize = (word) => {
    const lower = word.toLowerCase();
    return lower.charAt(0).toUpperCase() + lower.slice(1);
  };
  return (
    props.alert && (
      <div
        className={`alert alert-${props.alert.type} alert-dismissible fade show
        role="alert`}
      >
        <strong>{capatalize(props.alert.type)} </strong>
        {props.alert.message}
      </div>
    )
  );
};

export default Alert;
