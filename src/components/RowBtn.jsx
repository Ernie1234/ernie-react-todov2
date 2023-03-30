import React from "react";

function RowBtn({ handleComplete, handleActive, handleALL }) {
  return (
    <div className="rowBtn">
      <button className="btn btn__row-btn btn--all" onClick={handleALL}>
        All
      </button>
      <button className="btn btn__row-btn btn--active" onClick={handleActive}>
        Active
      </button>
      <button
        className="btn btn__row-btn btn--completed"
        onClick={handleComplete}
      >
        Completed
      </button>
    </div>
  );
}

export default RowBtn;
