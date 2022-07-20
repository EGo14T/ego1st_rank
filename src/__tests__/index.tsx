import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import IndexRoute from '../../src/renderer/routes';

describe('App', () => {
  it('should render', () => {
    expect(render(<IndexRoute />)).toBeTruthy();
  });
});
