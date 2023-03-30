import React from "react";

function ListItem({
  todos,
  handlerDelete,
  handleCheckChange,
  handleEditClick,
}) {
  const element = todos?.map((item) => (
    <div className="list__item" key={item.id}>
      <div className="item-row--1">
        <input
          type="checkbox"
          id="task"
          name="task"
          value="newsletter"
          className="task-check"
          checked={item.isCompleted}
          onChange={() => handleCheckChange(item)}
        />
        <label htmlFor="task" className="text__subtitle task-label">
          {item.title}
        </label>
      </div>
      <div className="item-row--2">
        <button className="btn btn__edit" onClick={() => handleEditClick(item)}>
          Edit
        </button>
        <button className="btn btn__del" onClick={() => handlerDelete(item.id)}>
          Delete
        </button>
      </div>
    </div>
  ));
  return <>{element}</>;
}

export default ListItem;
