import { render, screen } from '@testing-library/react-native';
import React from 'react';
import '@testing-library/jest-native';
import renderer from 'react-test-renderer';

import 'react-native';
import { Header } from './Header';

describe('Header Atom', () => {
  test('Component Snapshot', () => {
    const gradientHeaderTree = renderer
      .create(<Header value="Convenient Transaction" />)
      .toJSON();
    const whiteHeaderTree = renderer
      .create(<Header value="Millionsof people participate" variant="white" />)
      .toJSON();
    expect(gradientHeaderTree).toMatchSnapshot('Gradient Variant');
    expect(whiteHeaderTree).toMatchSnapshot('White Variant');
  });

  test('ensure variants works correctly', () => {
    const { rerender } = render(
      <Header value="Convenient Transaction" testID="atom-header" />,
    );
    let header = screen.getByTestId('atom-header');
    expect(header).toHaveTextContent('Convenient Transaction');
    expect(header).toHaveStyle({ fontSize: 40, fontWeight: '300' });
    rerender(
      <Header
        value="Millionsof people participate"
        variant="white"
        testID="atom-header"
      />,
    );
    header = screen.getByTestId('atom-header');
    expect(header).toHaveTextContent('Millionsof people participate');
    expect(header).toHaveStyle({
      fontSize: 42,
      fontWeight: '400',
      color: '#FFFFFF',
    });
  });
});
