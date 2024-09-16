import { useEffect, useState } from "react";

// import Form from "./components/Form";
import ExpenseList from "./expense-tracker/components/ExpenseList";

let count = 0;
function App() {
  const [expenses, setExpenses] = useState([
    { id: 1, description: "aaa", amount: 10, category: "Utilities" },
    { id: 2, description: "bbb", amount: 25, category: "Game" },
    { id: 3, description: "ccc", amount: 33, category: "Utilities" },
    { id: 4, description: "ddd", amount: 99, category: "Game" },
  ]);

  return (
    <div>
      <ExpenseList
        expenses={expenses}
        onDelete={(id) => setExpenses(expenses.filter((e) => e.id !== id))}
      />
    </div>
  );
}

export default App;
