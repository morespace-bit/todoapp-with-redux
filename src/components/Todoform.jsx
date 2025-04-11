import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTodo, onchange, saveChange } from "../feature/TodoSlice";

function Todoform() {
  const dispatch = useDispatch();
  const change = useSelector((state) => state.todo.change);
  const editAble = useSelector((state) => state.todo.edit);
  function handleSubmit(e) {
    e.preventDefault();
    if (change.length > 0) {
      dispatch(addTodo(change));
      dispatch(onchange(""));
    }
  }
  return (
    <>
      <div className="flex justify-center pt-20 flex-col items-center">
        <h1 className="font-black text-5xl">Add your todos</h1>
        <div className="flex gap-4">
          <input
            value={change}
            onChange={(e) => {
              dispatch(onchange(e.target.value));
            }}
            type="text"
            placeholder="Enter you todos..."
            className="w-2xl border-violet-600 border-2 py-3 outline-none bg-violet-400 mt-2 rounded-3xl indent-4 text-2xl font-bold text-blue-950"
          />
          {editAble ? (
            <button
              onClick={() => {
                dispatch(saveChange(change));
                dispatch(onchange(""));
              }}
              className="px-6 py-1 bg-cyan-600 rounded-3xl text-2xl hover:scale-105 active:scale-90 transition-all ease-in-out cursor-pointer"
            >
              Save
            </button>
          ) : (
            <button
              onClick={handleSubmit}
              type="submit"
              className="px-6 py-1 bg-cyan-600 rounded-3xl text-2xl hover:scale-105 active:scale-90 transition-all ease-in-out cursor-pointer"
            >
              Add
            </button>
          )}
        </div>
      </div>
    </>
  );
}

export default Todoform;
