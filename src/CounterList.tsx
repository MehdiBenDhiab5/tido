import React, { useEffect, useState } from "react";
import Counter from "./Counter";

type Props = { onCounterChange: Function };

function CounterList({ onCounterChange }: Props) {
  const [counters, setCounters] = useState([
    { id: 1, title: "title 1", value: 10 },
    { id: 2, title: "title 2", value: 20 },
    { id: 3, title: "title 3", value: 30 },
    { id: 4, title: "title 4", value: 40 },
    { id: 5, title: "title 5", value: 50 },
  ]);

  const increment = (id: number) => {
    //find element
    let items = [...counters];
    let i = items.findIndex((elem) => elem.id == id);
    let counter = items[i];

    //change element
    //'if' to avoid typescript error
    if (counter) {
      counter = {
        ...counter,
        value: counter.value + 1,
      };
    }
    items[i] = counter;

    //update state
    setCounters(items);
  };

  const decrement = (id: number) => {
    //find element
    let items = [...counters];
    let i = items.findIndex((elem) => elem.id == id);
    let counter = items[i];

    //change element
    //'if' to avoid typescript error
    if (counter) {
      counter = {
        ...counter,
        value: counter.value - 1,
      };
    }
    items[i] = counter;

    //update state
    setCounters(items);
  };

  const reset = (id: number) => {
    //find element
    let items = [...counters];
    let i = items.findIndex((elem) => elem.id == id);
    let counter = items[i];

    //change element
    //'if' to avoid typescript error
    if (counter) {
      counter = {
        ...counter,
        value: 0,
      };
    }
    items[i] = counter;

    //update state
    setCounters(items);
  };

  //notify parent on counter change
  useEffect(() => {
    let sum = 0;
    counters.forEach((elem) => {
      sum += elem.value;
    });
    onCounterChange(sum);
  }, [counters]);

  return (
    <div>
      {counters.map((elem: any) => {
        return (
          <Counter
            key={elem.id}
            id={elem.id}
            value={elem.value}
            increment={increment}
            decrement={decrement}
            reset={reset}
          >
            {elem.title}
          </Counter>
        );
      })}
    </div>
  );
}

export default CounterList;
