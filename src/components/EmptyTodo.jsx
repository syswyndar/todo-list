import React from "react";
import EmptyTodoImg from "../assets/todo-empty-state.png";

const EmptyTodo = () => {
  return (
    <>
      <div
        data-cy="todo-empty-state"
        className="flex justify-center py-[4.0625rem]"
      >
        <img
          src={EmptyTodoImg}
          alt=""
          data-cy="activity-empty-state-image"
          className="md:w-[30.9375em] md:h-[20.625em] sm:w-[15.9375em] sm:h-[10.625em]"
        />
      </div>
    </>
  );
};

export default EmptyTodo;
