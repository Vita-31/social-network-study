import { render, screen } from '@testing-library/react';
import App from './App';
import SocialApp from './App';

test('renders learn react link', () => {
  render(<SocialApp />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
