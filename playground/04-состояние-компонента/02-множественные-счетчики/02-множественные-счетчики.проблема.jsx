const { useState } = React;

const Counter = () => {
  // Каждый экземпляр получает собственное состояние
  const [count, setCount] = useState(0);

  const handleIncrement = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <h3>Счетчик: {count}</h3>

      <button onClick={handleIncrement}>Увеличить</button>
    </div>
  );
};

function App() {
  // Из компонента вам нужно вернуть 3 счетчика
  return (
    <>
      <Counter />
      <Counter />
      <Counter />
    </>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
