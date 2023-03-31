import { render, screen } from '@testing-library/react';
import Test from '../lessons/Test';

test('renders lemon restaurant link', () => {
  render(<Test />);
  const linkElement = screen.getByText(/lemon restaurant/i);
  expect(linkElement).toBeInTheDocument();
});
