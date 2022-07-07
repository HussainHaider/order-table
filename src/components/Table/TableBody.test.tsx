import { screen } from '@testing-library/react';
import {BrowserRouter} from 'react-router-dom'
import { renderWithProviders } from 'utils/test-utils';
import TableBody from './TableBody';
import { orders } from "data/data";


describe('TableBody component', () => {
  test('renders the TableBody component', async () => {
    renderWithProviders(<BrowserRouter><TableBody /></BrowserRouter>, {
        preloadedState: {
            orders: {
                isLoading: false,
                content: orders,
                data: orders
            }
    }});
    expect(screen.getAllByTestId(/order-/i).length).toEqual(4);
  });
}); 