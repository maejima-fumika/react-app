import { render, screen } from '@testing-library/react';
import Game from '../../pages/Game';

test('renders square component', () => {
  render(<Game />)
  const linkElement = screen.getByText(/Next/i);
  expect(linkElement).toBeInTheDocument();
});