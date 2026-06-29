import { render, screen } from '@testing-library/react';
import App from './App';

test('renders the portfolio with the correct browser title', () => {
  render(<App />);
  expect(document.title).toBe('Ayesha Nazir');
  expect(screen.getByText(/Ayesha Nazir/i)).toBeInTheDocument();
});
