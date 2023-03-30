import React from "react";
import AppEditInput from "./AppEditInput";
import ListItem from "./ListItem";

function List({
  todos,
  handlerDelete,
  handleCheckChange,
  handleEditClick,
  handleEditSubmit,
  handleEditChange,
  editing,
  handleEditClc,
  currentTask,
  length,
  handleClr,
}) {
  return (
    <div className="list">
      <div className="list--header">
        <h3 className="text__title">
          {length} task{length > 1 ? "s" : ""} remaining
        </h3>
        <h2 className="text-clr" onClick={handleClr}>
          Clear All
        </h2>
      </div>

      {editing ? (
        <AppEditInput
          handleEditSubmit={handleEditSubmit}
          handleEditChange={handleEditChange}
          handleEditClc={handleEditClc}
          currentTask={currentTask}
        />
      ) : (
        <ListItem
          todos={todos}
          handlerDelete={handlerDelete}
          handleCheckChange={handleCheckChange}
          handleEditClick={handleEditClick}
        />
      )}
    </div>
  );
}

export default List;
