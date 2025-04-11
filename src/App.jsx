import Todolist from "./components/Tdolist";
import Todoform from "./components/Todoform";
import { useSelector } from "react-redux";

function App() {
  const value = useSelector((state) => state.todo.todos);
  return (
    <div className="min-h-screen w-full bg-gray-600">
      <Todoform />
      {value.map((dos) => {
        return (
          <div
            key={dos.id}
            className="w-full flex justify-center items-center flex-col"
          >
            <Todolist value={dos} />
          </div>
        );
      })}
    </div>
  );
}

export default App;
