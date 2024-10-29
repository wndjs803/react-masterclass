import { useState } from "react";
import { useForm } from "react-hook-form";

interface IForm {
  toDo: string;
}

function ToDoList() {
  const { register, handleSubmit, setValue } = useForm<IForm>();
  // handleSubmit - input이 유효한 것을 확인한 후 호출되는 함수 (onValid)
  const handleValid = (data: IForm) => {
    console.log("add to do", data.toDo);
    setValue("toDo", "");
  };
  return (
    <div>
      <form onSubmit={handleSubmit(handleValid)}>
        <input
          {...register("toDo", {
            required: "Please write a to do",
          })}
          placeholder="Write a to do"
        />
        <button>Add</button>
      </form>
    </div>
  );
}

export default ToDoList;
