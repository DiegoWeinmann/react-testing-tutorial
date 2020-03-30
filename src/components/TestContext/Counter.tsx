import React from 'react';

import { CounterContext } from './TestContext';

const Counter = () => {
  const { counter, increment, decrement } = React.useContext(CounterContext);
  console.log(counter);
  return (
    <>
      <h1 data-testid='counter'>{counter}</h1>
      <button data-testid='button-up' onClick={increment}>
        Up
      </button>
      <button
        disabled={counter === 0 ? true : false}
        data-testid='button-down'
        onClick={decrement}
      >
        Down
      </button>
    </>
  );
};

export default Counter;
