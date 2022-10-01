import { render, screen } from '@testing-library/react-native';
import React from 'react';
import '@testing-library/jest-native';
import renderer from 'react-test-renderer';

import 'react-native';
import { Badge } from './Badge';

describe('Badge Atom', () => {
  test('Component Snapshot', () => {
    const tree = renderer.create(<Badge value={4.8} />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  test('ensure variants works correctly', () => {
    const { rerender } = render(<Badge value={4.8} testID="atom-badge" />);
    const badge = screen.getByTestId('atom-badge');
    expect(badge).toHaveTextContent('+4.8%');
    expect(badge).toHaveStyle({ color: '#76E268' });
    rerender(<Badge value={-1.3} testID="atom-badge" />);
    expect(badge).toHaveTextContent('-1.3%');
    expect(badge).toHaveStyle({ color: '#EA3943' });
  });
});
