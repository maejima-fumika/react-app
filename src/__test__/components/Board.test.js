import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Board from '../../components/Board';

test('exist button', async () => {
  render(<Board />)
  let test_squares = Array(9).fill("")
  //全てのボタンが存在して、ちゃんと空か
  for (let i = 0; i < 9; i++) {
    expect(screen.getByTestId("square" + String(i))).toBeInTheDocument()
    expect(screen.getByTestId("square" + String(i)).innerHTML).toBe(test_squares[i])
  }
});

test('can judge winner1', async () => {
  render(<Board />)
  const inputOrder = [0,4,1,2,6,7,3]
  const tmp_board = await clickButtons(inputOrder)
  for (let i = 0; i < 9; i++) {
    expect(screen.getByTestId("square" + String(i)).innerHTML).toBe(tmp_board[i])
  }
});

test('can judge winner2', async () => {
  render(<Board />)
  const inputOrder = [6,4,8,2,7]
  const tmp_board = await clickButtons(inputOrder)
  for (let i = 0; i < 9; i++) {
    expect(screen.getByTestId("square" + String(i)).innerHTML).toBe(tmp_board[i])
  }
});

test('can judge draw', async () => {
  render(<Board />)
  const inputOrder = [0,4,1,2,6,7,8,3,5]
  const tmp_board = await clickButtons(inputOrder)
  for (let i = 0; i < 9; i++) {
    expect(screen.getByTestId("square" + String(i)).innerHTML).toBe(tmp_board[i])
  }
});


function clickButtons(inputOrder) {
  return new Promise( async (resolve)=>{
  let test_squares = Array(9).fill("")
  for (let i = 0; i < inputOrder.length; i++) {
    expect(screen.getByText('Next player: ' + (i%2 ? 'O' : 'X'))).toBeInTheDocument();
    await userEvent.click(screen.getByTestId("square" + String(inputOrder[i])))
    test_squares[inputOrder[i]] = i%2 ? 'O' : 'X'
    for (let j = 0; j < 9; j++) {
      expect(screen.getByTestId("square" + String(j)).innerHTML).toBe(test_squares[j])
    }
  }
  resolve(test_squares)
})
}