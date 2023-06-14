import React from "react";
import TodoList from "../components/TodoList";
import FormToDo from "../components/FormToDo";
import FilteredButtons from "../components/FilteredButtons";

const AppRouter = () => {
  return (
    <div>
      <FormToDo />
      <FilteredButtons/>
      <TodoList />
    </div>
  );
};

export default AppRouter;
