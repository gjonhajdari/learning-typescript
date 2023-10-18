import React from "react";
import ReactDOM from "react-dom/client";

const App = () => {
  return (
    <div>
      <h1>Hi there!</h1>
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
