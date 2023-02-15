import React from "react";

export function Square(props) {
  return (
    <button
      className="square"
      onClick={props.onClick}
      data-e2e={props.position}
    >
      {props.value}
    </button>
  );
}
