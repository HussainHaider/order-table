import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event'
import {BrowserRouter} from 'react-router-dom'
import { Provider } from 'react-redux';
import { store } from 'app/store';
import TableBody from './TableBody';



test('renders the TableBody component', async () => {
  render( <Provider store={store}><TableBody /></Provider>, {wrapper: BrowserRouter});
//   expect(screen.getByTestId('search-box')).toBeInTheDocument();
//   expect(screen.getByTestId('loading')).toBeInTheDocument();
});
  