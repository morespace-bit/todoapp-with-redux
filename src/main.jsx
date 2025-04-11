import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { Provider } from "react-redux";
import { CountStore } from "./redux/CountStore.js";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={CountStore}>
      <App />
    </Provider>
  </StrictMode>
);
