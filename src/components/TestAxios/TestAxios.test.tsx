import React from 'react';
import {
  render,
  cleanup,
  fireEvent,
  waitForElement
} from '@testing-library/react';
import TestAxios from './TestAxios';
import axiosMock from 'axios';

jest.mock('axios');
axiosMock.get = jest.fn().mockResolvedValue({
  data: {
    greeting: 'hello world'
  }
});

afterEach(cleanup);

const renderUi = () => {
  return render(<TestAxios url={`:`} />);
};

describe('<TestAxios/>', () => {
  it('matches the snapshot.', () => {
    const { asFragment } = renderUi();
    expect(asFragment()).toMatchSnapshot();
  });

  it('should display a loading text.', () => {
    const { getByTestId } = renderUi();
    expect(getByTestId('loading')).toHaveTextContent('Loading...');
  });

  it('should load and display the data', async () => {
    const url = '/greeting';
    const { getByTestId } = render(<TestAxios url={url} />);

    fireEvent.click(getByTestId('fetch-data'));

    const greetingData = await waitForElement(() => getByTestId('show-data'));

    expect(axiosMock.get).toHaveBeenCalledTimes(1);
    expect(axiosMock.get).toHaveBeenCalledWith(url);
    console.log(greetingData);
    expect(greetingData).toHaveTextContent('hello world');
  });
});
