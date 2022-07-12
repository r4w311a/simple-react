import Expenses from './components/Expenses/Expenses';

function App() {
  const expenses = [
    { name: "Car Insurance", price: 294.67, date: new Date(2022, 6, 12) },
    { name: "test", price: 148.21, date: new Date(2022, 6, 12) },
    { name: "Rent", price: 599.57, date: new Date(2022, 6, 12) },
    { name: "book", price: 82.99, date: new Date(2022, 6, 12) },
  ];

  return (
    <div>
      <h2>Let's get started!</h2>
      <Expenses items={expenses} />
    </div>
  );
}

export default App;

