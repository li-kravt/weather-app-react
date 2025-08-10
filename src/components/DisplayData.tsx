import React from "react";

// Type guard
function isSelectElement(element: HTMLElement): element is HTMLSelectElement {
  return element.tagName === "select";
}

type DisplayDataProps = {
  city: string;
};

function DisplayData(props: DisplayDataProps) {
  return <p>{props.city}</p>;
}

export default DisplayData;
