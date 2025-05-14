const App = () => {
  return React.createElement(
    "div",
    { style: { padding: "1rem", fontFamily: "sans-serif" } },
    React.createElement("h1", { style: { fontSize: "24px", fontWeight: "bold" } }, "BudgetMe"),
    React.createElement("p", null, "Benvenuto nella versione web dell'app.")
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(React.createElement(App));
