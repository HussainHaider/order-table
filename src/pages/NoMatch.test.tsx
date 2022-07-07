import { render, screen } from '@testing-library/react';
import {BrowserRouter} from 'react-router-dom'
import NoMatch from './NoMatch';


test('checking NoMatch component elements', () => {
  render(<NoMatch />, {wrapper: BrowserRouter});
  expect(screen.getByText(/It looks like you're lost/i)).toBeInTheDocument();
  expect(screen.getByText(/Go to the home page/i)).toBeInTheDocument();
  expect(screen.getByTestId('home-link')).toBeInTheDocument();
});
 