import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";

const TodoList = () => {

    const [status, setStatus] = useState({});

    const { todoList } = useSelector((store) => store.toDo);
    
    useEffect(() => {
        todoList.forEach(item => {
            setStatus((previusState) => ({
              ...previusState,
              [item.id]: item.status,
            }));
        })
    },[todoList])

  console.log(todoList);
  return (
    <form>
      {todoList.map((item) => (
        <label key={item.id}>
          <input
            type="checkbox"
            checked={status[item.id]}
            onChange={() => {
              console.log("Quiero cambiar el status de esta tarea");
              setStatus({
                ...status,
                [item.id]: !status[item.id],
              });
            }}
          />
          {item.description}
        </label>
      ))}
      <button type="submit">Guardar</button>
    </form>
  );
};

export default TodoList;
