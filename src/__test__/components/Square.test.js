import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Square from "../../components/Square";


describe("function", ()=>{
  test('Square function test', async () => {
    const mockObj = jest.fn();
    render(<Square
    value="X"
    onClick={mockObj}
  />) 
  
  expect(screen.getByText("X")).toBeInTheDocument();
  await userEvent.click(screen.getByRole("button"))
  expect(mockObj.mock.calls.length).toBe(1);
  });
})

