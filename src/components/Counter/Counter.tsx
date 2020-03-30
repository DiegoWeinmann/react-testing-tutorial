import React from 'react';

const Counter = () => {
  const [counter, setCounter] = React.useState(0);

  const increment = () => {
    setCounter(counter + 1);
  };

  const decrement = () => {
    if (counter > 0) {
      setCounter(counter - 1);
    }
  };

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
