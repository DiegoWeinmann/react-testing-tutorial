import React from 'react';

interface CounterState {
  counter: number;
  increment?: () => void;
  decrement?: () => void;
}

const initialState: CounterState = {
  counter: 0
};

export const CounterContext = React.createContext<CounterState>(initialState);

export const CounterProvider: React.FC = props => {
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
    <CounterContext.Provider
      value={{
        counter,
        increment,
        decrement
      }}
    >
      {props.children}
    </CounterContext.Provider>
  );
};
