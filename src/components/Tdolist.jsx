import { useDispatch, useSelector } from "react-redux";
import { removeTodo, updateTodo, setChangeText } from "../feature/TodoSlice";
import { useState } from "react";

function Todolist({ value }) {
  const dispatch = useDispatch();
  const [up, setUp] = useState(value.text);
  console.log(value.text);
  return (
    <>
      <div className="w-3xl bg-fuchsia-600 mt-4 p-4 rounded-3xl font-black text-2xl flex justify-between flex-row items-center">
        <input
          type="text"
          value={up}
          className="outline-none w-full p-2 font-black text-3xl"
        />

        <div className="flex gap-2">
          <button
            onClick={() => {
              dispatch(setChangeText(value.id));
              dispatch(removeTodo(value.id));
            }}
            className="px-3 py-2 bg-cyan-700 rounded-3xl hover:scale-105 active:scale-90 transition-all ease-in-out cursor-pointer"
          >
            Edit
          </button>
          <button
            onClick={() => {
              dispatch(removeTodo(value.id));
            }}
            className="px-3 py-2 bg-cyan-700 rounded-3xl hover:scale-105 active:scale-90 transition-all ease-in-out cursor-pointer"
          >
            Delete
          </button>
        </div>
      </div>
    </>
  );
}
export default Todolist;
