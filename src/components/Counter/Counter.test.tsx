import React from 'react';
import { render, cleanup, fireEvent } from '@testing-library/react';
import Counter from './Counter';

const renderCounter = () => {
  return render(<Counter />);
};

afterEach(cleanup);

describe('<Counter/>', () => {
  it('matches the snapshot.', () => {
    const { asFragment } = renderCounter();
    expect(asFragment()).toMatchSnapshot();
  });

  it('should have a initial count of 0.', () => {
    const { getByTestId } = renderCounter();
    expect(getByTestId('counter')).toHaveTextContent('0');
  });

  it('has a Down button that is disabled.', () => {
    const { getByTestId } = renderCounter();
    expect(getByTestId('button-down')).toBeDisabled();
  });

  //  Events
  it('increments counter when clicking up button.', () => {
    const { getByTestId } = renderCounter();
    fireEvent.click(getByTestId('button-up'));
    expect(getByTestId('counter')).toHaveTextContent('1');
  });

  it('does not decrement counter when counter is 0.', () => {
    const { getByTestId } = renderCounter();
    fireEvent.click(getByTestId('button-down'));
    expect(getByTestId('counter')).toHaveTextContent('0');
  });

  it.only('decrements the counter when clicking down button.', () => {
    const { getByTestId } = renderCounter();
    fireEvent.click(getByTestId('button-up'));
    fireEvent.click(getByTestId('button-down'));
    expect(getByTestId('counter')).toHaveTextContent('0');
  });
});
