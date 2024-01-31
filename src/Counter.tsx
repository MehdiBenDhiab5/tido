import React, { Children, useState } from "react";

type Props = {
  id: number;
  value: number;
  children: any;
  increment: Function;
  decrement: Function;
  reset: Function;
};

function Counter({ id, value, children, increment, decrement, reset }: Props) {
  return (
    <div>
      <h1>{children}</h1>
      <h2>{value}</h2>
      <button
        onClick={() => {
          increment(id);
        }}
      >
        +
      </button>
      <button
        onClick={() => {
          decrement(id);
        }}
        disabled={value == 0}
      >
        -
      </button>
      <button
        onClick={() => {
          reset(id);
        }}
        disabled={value == 0}
      >
        reset
      </button>
    </div>
  );
}

export default Counter;
