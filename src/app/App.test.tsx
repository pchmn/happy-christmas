import App from '@app/App';
import { render } from '@testing-library/react';

test('App is defined', () => {
  const view = render(<App />);

  expect(view).toBeDefined();
});
