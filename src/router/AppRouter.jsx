import React from "react";
import TodoList from "../components/TodoList";
import FormToDo from "../components/FormToDo";

const AppRouter = () => {
  return (
    <div>
      <FormToDo />
      <TodoList />
    </div>
  );
};

export default AppRouter;
