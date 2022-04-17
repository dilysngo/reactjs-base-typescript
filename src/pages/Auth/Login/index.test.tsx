import { render, screen } from '@testing-library/react'
import Login from './index'

test('renders home page', () => {
  render(<Login />)
  const linkElement = screen.getByText(/Login/i)
  expect(linkElement).toBeInTheDocument()
})
