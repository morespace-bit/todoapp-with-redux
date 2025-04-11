import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import CounterUi from "./components/CounterUi";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <CounterUi />
    </div>
  );
}

export default App;
