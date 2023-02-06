import React from "react";
import { useContext } from "react";
import { SubmitContext } from "../../App";
const BottomWrapper = ({ letter, content }) => {
  const { handleSubmit, selectedOption } = useContext(SubmitContext);
  return (
    <button
      className={`option-button ${selectedOption === letter && "selected"}`}
      value={letter}
      onClick={(event) => {
        handleSubmit(event);
      }}
      type="submit"
    >
      <span className="Letter">{letter}</span>
      <span className="Content">{content}</span>
    </button>
  );
};

export default BottomWrapper;
