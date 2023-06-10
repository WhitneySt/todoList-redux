import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useDispatch, useSelector } from "react-redux";
import { createTodoAction } from "../redux/actions/todolistActions";

const schema = yup.object({
  description: yup.string().required("No hay tarea para guardar"),
});

const FormToDo = () => {
  const dispatch = useDispatch();

    const { isEdit } = useSelector((store) => store.toDo);
    
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
    defaultValues: {
        description: isEdit?.description ? isEdit.description : ""
    },
  });

  const onSubmit = (data) => {
    console.log(data);

    dispatch(createTodoAction(data));
    reset();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input
        type="text"
        placeholder="Agregue una nueva tarea"          
        {...register("description")}
      />
      <span>{errors.description?.message}</span>
      <button type="submit">Nueva tarea</button>
    </form>
  );
};

export default FormToDo;
