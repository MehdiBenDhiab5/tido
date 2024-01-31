import { useState } from "react";
import "./App.css";
import CounterList from "./CounterList";
import Header from "./Header";

function App() {
  const [sum, setSum] = useState<number>(0);
  const onCounterChange = (newValue: number) => {
    setSum(newValue);
  };

  return (
    <div>
      <Header sum={sum} />
      <CounterList onCounterChange={onCounterChange} />
    </div>
  );
}

export default App;
