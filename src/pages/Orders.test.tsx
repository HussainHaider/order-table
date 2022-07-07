import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event'
import {BrowserRouter} from 'react-router-dom'
import { Provider } from 'react-redux';
import { store } from 'app/store';
import Orders from './Orders';

test('renders the Order component', async () => {
  render( <Provider store={store}><Orders /></Provider>, {wrapper: BrowserRouter});
  expect(screen.getByTestId('search-box')).toBeInTheDocument();
  expect(screen.getByTestId('loading')).toBeInTheDocument();
});

test('renders the TABLE data', async () => {
    render( <Provider store={store}><Orders /></Provider>, {wrapper: BrowserRouter});
    expect(screen.getByTestId('search-box')).toBeInTheDocument();
    expect(screen.getByTestId('loading')).toBeInTheDocument();
});
  