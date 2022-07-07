import { screen } from '@testing-library/react';
import {BrowserRouter} from 'react-router-dom'
import { renderWithProviders } from 'utils/test-utils';
import Orders from './Orders';


describe('Orders component', () => {
  test('renders the Order component', async () => {
    renderWithProviders(<BrowserRouter><Orders /></BrowserRouter>);
    expect(screen.getByTestId('search-box')).toBeInTheDocument();
    expect(screen.getByTestId('loading')).toBeInTheDocument();
  });
  
  test('renders the TABLE data', async () => {
    renderWithProviders(<BrowserRouter><Orders /></BrowserRouter>);
    expect(screen.getByTestId('search-box')).toBeInTheDocument();
    expect(screen.getByTestId('loading')).toBeInTheDocument();
  });
}); 