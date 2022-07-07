import { render, screen } from '@testing-library/react';
import {BrowserRouter} from 'react-router-dom'
import Home from './Home';


test('Home component', () => {
  render(<Home />, {wrapper: BrowserRouter});
  expect(screen.getByText(/Go to orders page/i)).toBeInTheDocument();
  expect(screen.getByTestId('order-link')).toBeInTheDocument();
});
