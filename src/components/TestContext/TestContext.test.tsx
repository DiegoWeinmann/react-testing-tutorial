import React from 'react';
import { render, cleanup, fireEvent } from '@testing-library/react';
import Counter from './Counter';
import { CounterProvider } from './TestContext';

const renderCounter = () => {
  return render(
    <CounterProvider>
      <Counter />
    </CounterProvider>
  );
};

afterEach(cleanup);

describe('', () => {
  it('matches the snapshot', () => {
    const { asFragment } = renderCounter();
    expect(asFragment()).toMatchSnapshot();
  });

  it('has a starting value of 0.', () => {
    const { getByTestId } = renderCounter();
    expect(getByTestId('counter')).toHaveTextContent('0');
  });

  it('increments when clicking up button.', () => {
    const { getByTestId } = renderCounter();

    fireEvent.click(getByTestId('button-up'));
    expect(getByTestId('counter')).toHaveTextContent('1');
  });
});
