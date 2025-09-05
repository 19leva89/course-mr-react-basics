const { useState } = React;

function App() {
  // Добавьте хук useState для создания переменной count
  const [count, setCount] = useState(0);

  const handleIncrement = () => {
    setCount(count + 1);
  };
  return (
    <div>
      {/* Добавьте текст, который будет отображать значение: "Счетчик: 0" */}
      <h1>Счетчик {count}</h1>

      {/* Добавьте кнопку, которая будет увеличивать значение count на 1 */}
      <button onClick={handleIncrement}>Увеличить</button>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
