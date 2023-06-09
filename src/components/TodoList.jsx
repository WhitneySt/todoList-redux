import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  deleteTodoAction,
  handleIsEditAction,
  updateStatusAction,
} from "../redux/actions/todolistActions";

const TodoList = () => {
  // const [status, setStatus] = useState({});

  const dispatch = useDispatch();

  const [taskList, setTaskList] = useState([]);

  const { todoList, filteredTodo } = useSelector((store) => store.toDo);

  // useEffect(() => {
  //     todoList.forEach(item => {
  //         setStatus((previusState) => ({
  //           ...previusState,
  //           [item.id]: item.status,
  //         }));
  //     })
  // },[todoList])

  useEffect(() => {
    if (filteredTodo.length) {
      setTaskList([...filteredTodo]);
    } else {
      setTaskList([...todoList]);
    }
  }, [todoList, filteredTodo]);

  const handleDelete = (id) => {
    dispatch(deleteTodoAction(id));
  };

  const handleEdit = (task) => {
    dispatch(handleIsEditAction(task));
  };

  return (
    <form>
      {taskList.map((item) => (
        <div key={item.id}>
          <label>
            <input
              type="checkbox"
              checked={item.status}
              onChange={() => {
                console.log("Quiero cambiar el status de esta tarea");
                dispatch(updateStatusAction(item.id));
              }}
            />
            <span>{item.description}</span>
          </label>
          <div>
            <span
              className="material-symbols-outlined"
              onClick={() => handleDelete(item.id)}
            >
              close
            </span>
            <span
              className="material-symbols-outlined"
              onClick={() => handleEdit(item)}
            >
              edit
            </span>
          </div>
        </div>
      ))}
    </form>
  );
};

export default TodoList;
