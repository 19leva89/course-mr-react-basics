const { useState } = React;

function Counter({ initial = 0 }) {
  const [count, setCount] = useState(initial);
  const [disabled, setDisabled] = useState(false);
  // Добавьте кнопку которая будет блокировать кнопку увеличить
  // Добавьте кнопку которая будет разблокировать кнопку увеличить
  // Добавьте кнопку которая будет сбрасывать счетчик

  const handleBlock = () => {
    setDisabled(true);
  };

  const handleUnblock = () => {
    setDisabled(false);
  };

  const handleResetCounter = () => {
    setCount(0);
  };

  return (
    <div>
      <h1>Счетчик: {count}</h1>

      <button onClick={() => setCount(count + 1)} disabled={disabled}>
        Увеличить
      </button>

      <button onClick={handleBlock}>Блокировать</button>

      <button onClick={handleUnblock}>Разблокировать</button>

      <button onClick={handleResetCounter}>Сбросить</button>
    </div>
  );
}

function App() {
  return (
    <>
      {/* Передавайте начальное значение счетчика через пропсы */}
      <Counter initial={1} />
      <Counter initial={2} />
      <Counter initial={3} />
    </>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
