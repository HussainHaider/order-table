import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event'
import {BrowserRouter} from 'react-router-dom'
import { renderWithProviders } from 'utils/test-utils';
import App from './App';

test('renders the /order route', async () => {
  renderWithProviders(<BrowserRouter><App /></BrowserRouter>);
  const user = userEvent.setup();

  // verify page content for expected route after navigating
  await user.click(screen.getByTestId('order-link'));
  expect(screen.getByTestId('search-box')).toBeInTheDocument();
});
