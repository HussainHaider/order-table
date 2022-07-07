import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event'
import {BrowserRouter} from 'react-router-dom'
import { Provider } from 'react-redux';
import { store } from './app/store';
import App from './App';

test('renders the /order route', async () => {
  render( <Provider store={store}>
    <App />
  </Provider>, {wrapper: BrowserRouter});
  const user = userEvent.setup();

  // verify page content for expected route after navigating
  await user.click(screen.getByTestId('order-link'));
  expect(screen.getByTestId('search-box')).toBeInTheDocument();
});
