import React from "react";
import { useDispatch } from "react-redux";
import { filterTodoAction } from "../redux/actions/todolistActions";
import { statusData } from "../services/data";

const FilteredButtons = () => {
  const dispatch = useDispatch();

  const handleFilter = (status) => {
    dispatch(filterTodoAction(status));
  };
  return (
    <div>
      {/* <button onClick={()=>handleFilter('all')}>All</button>
          <button onClick={() => handleFilter(true)}>Completadas</button>
          <button onClick={() => handleFilter(false)}>Pendientes</button> */}
      {statusData.map((item, index) => (
        <button key={index} onClick={() => handleFilter(item.status)}>
          {item.label}
        </button>
      ))}
    </div>
  );
};

export default FilteredButtons;
