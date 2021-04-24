import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Board from '../../components/Board';

test('renders board component', async () => {
  render(<Board />)
  let test_squares = Array(9).fill("")
  for (let i = 0; i < 9; i++) {
    expect(screen.getByTestId("square" + String(i))).toBeInTheDocument()
    expect(screen.getByTestId("square" + String(i)).innerHTML).toBe(test_squares[i])
  }
  await userEvent.click(screen.getByTestId("square0"))
  test_squares[0] = "X"
  for (let i = 0; i < 9; i++) {
    expect(screen.getByTestId("square" + String(i)).innerHTML).toBe(test_squares[i])
  }
  await userEvent.click(screen.getByTestId("square1"))
  test_squares[1] = "X"
  for (let i = 0; i < 9; i++) {
    expect(screen.getByTestId("square" + String(i)).innerHTML).toBe(test_squares[i])
  }
});
