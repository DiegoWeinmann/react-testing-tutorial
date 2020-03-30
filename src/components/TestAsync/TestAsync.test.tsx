import React from 'react';
import {
  render,
  cleanup,
  fireEvent,
  waitForElement
} from '@testing-library/react';
import TestAsync from './TestAsync';

const renderTestAsync = () => {
  return render(<TestAsync />);
};

afterEach(cleanup);

describe('<TestAsync/>', () => {
  it('matches the snapshot', () => {
    const { asFragment } = renderTestAsync();
    expect(asFragment()).toMatchSnapshot();
  });

  it.only('increments counter after .5s', async () => {
    const { getByTestId, getByText } = renderTestAsync();

    fireEvent.click(getByTestId('button-up'));
    const counter = await waitForElement(() => getByText('1'));
    expect(counter).toHaveTextContent('1');
  });
});
