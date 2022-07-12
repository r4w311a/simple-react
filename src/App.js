import ExpenseItem from "./components/ExpenseItem";

function App() {
  const Expenses = [
    { name: "Car Insurance", price: 294.67, date: new Date(2022, 6, 12) },
    { name: "test", price: 148.21, date: new Date(2022, 6, 12) },
    { name: "Rent", price: 599.57, date: new Date(2022, 6, 12) },
    { name: "book", price: 82.99, date: new Date(2022, 6, 12) },
  ]
  return (
    <div>
      <h2>Let's get started!</h2>
      <ExpenseItem name={Expenses[0].name} price={Expenses[0].price} date={Expenses[0].date} />
      <ExpenseItem name={Expenses[1].name} price={Expenses[1].price} date={Expenses[1].date} />
      <ExpenseItem name={Expenses[2].name} price={Expenses[2].price} date={Expenses[2].date} />
      <ExpenseItem name={Expenses[3].name} price={Expenses[3].price} date={Expenses[3].date} />
    </div>
  );
}

export default App;
