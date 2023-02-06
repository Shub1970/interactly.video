import React from "react";
import { useContext } from "react";
import { SubmitContext } from "../../App";
const BottomWrapper = ({ letter, content, data_pag }) => {
  const { handleSubmit, handleOptionClick, selectedOption } =
    useContext(SubmitContext);
  return (
    <button
      className={`option-button ${selectedOption === { letter } && "selected"}`}
      data-page={data_pag === undefined ? "NULL" : data_pag}
      onClick={(event) => {
        handleSubmit(event);
        handleOptionClick(letter);
      }}
      type="submit"
    >
      <span className="Letter">{letter}</span>
      <span className="Content">{content}</span>
    </button>
  );
};

export default BottomWrapper;
