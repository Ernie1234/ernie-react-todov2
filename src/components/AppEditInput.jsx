import React from "react";

function AppEditInput({
  handleEditSubmit,
  handleEditChange,
  handleEditClc,
  currentTask,
}) {
  return (
    <form className="edit-row" onSubmit={handleEditSubmit}>
      <input
        type="text"
        className="input input__add-task"
        placeholder="Enter your tasks.."
        value={currentTask.title}
        onChange={handleEditChange}
      />

      <div className="item-row--3">
        <button className="btn btn__save" type="submit">
          Save
        </button>
        <button className="btn btn__clc" onClick={handleEditClc}>
          Cancel
        </button>
      </div>
    </form>
  );
}

export default AppEditInput;
