const { useState } = React;

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h1>Счетчик: {count}</h1>

      <button onClick={() => setCount(count + 1)}>Увеличить</button>
    </div>
  );
}

function App() {
  // Добавьте состояние для хранения массива счетчиков
  const [counters, setCounters] = useState([0]);

  const addCounter = () => {
    setCounters([...counters, 0]);
  };

  return (
    // Добавьте кнопку, которая будет увеличивать количество счетчиков
    <>
      <button onClick={addCounter}>Добавить новый счетчик</button>

      <div>
        {/* Передавайте начальное значение счетчика через пропсы */}
        {counters.map((_, index) => (
          <Counter key={index} />
        ))}
      </div>
    </>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
