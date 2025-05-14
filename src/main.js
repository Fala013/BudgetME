import React from "react";
import ReactDOM from "react-dom/client";

function App() {
  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold">BudgetMe</h1>
      <p>Benvenuto nella versione web dell'app.</p>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
