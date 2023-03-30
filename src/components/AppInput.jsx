import React from "react";

function AppInput({ inputChangeHandler, inputValue, handleInputSubmit }) {
  return (
    <form onSubmit={handleInputSubmit} className="form">
      <input
        type="text"
        className="input input__add-task"
        placeholder="Enter your tasks.."
        onChange={inputChangeHandler}
        value={inputValue}
        // autoFocus
        // disabled
      />
      <button className="btn btn__add-task" type="submit">
        Add
      </button>
    </form>
  );
}

export default AppInput;
