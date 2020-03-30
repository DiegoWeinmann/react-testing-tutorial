import React from 'react';
import { render, cleanup } from '@testing-library/react';
import App from './App';

afterEach(cleanup);

describe('<App/>', () => {
  it('matches the snapshot', () => {
    const { asFragment } = render(<App />);
    expect(asFragment()).toMatchSnapshot();
  });
});
