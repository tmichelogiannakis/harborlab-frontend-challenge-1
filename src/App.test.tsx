import App from './App';
import { render } from '@testing-library/react';

test('renders title', () => {
  const { getByRole } = render(<App />);
  const titleElement = getByRole('heading', { level: 1 });
  expect(titleElement.textContent).toBe('Hello World!');
});
