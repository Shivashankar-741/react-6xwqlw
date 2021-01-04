import react, { useState } from "React";

export default function App() {
  const [count, setCount] = useState();

  return (
    <>
      <button onClick={() => setCount(count - 1)}>-</button>
      <span>{count}</span>
      <button onClick={() => setCount(count + 1)}>+</button>
    </>
  );
}
