import { todoTypes } from "../type/todolistTypes";

const initialValue = {
  todoList: [
    {
      id: 1,
      description: "Compartir material de la sesión con Front 4",
      status: false,
    },
    {
      id: 2,
      description: "Preparar la cena",
      status: false,
    },
    {
      id: 3,
      description: "Ver los videos de la clase",
      status: true,
    },
  ],
};

export const todolistReducer = (state=initialValue, action) => {
  switch (action.type) {
    case todoTypes.LIST_TODO:
          return {
          ...state
      };
    

    default:
      return state;
  }
};
