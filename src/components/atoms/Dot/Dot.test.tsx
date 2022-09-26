import { render, screen } from '@testing-library/react-native';
import React from 'react';
import '@testing-library/jest-native';
import renderer from 'react-test-renderer';

import 'react-native';
import { Dot } from './Dot';

describe('Dot Atom', () => {
  test('Comonent Snapshot', () => {
    const defaultDotTree = renderer.create(<Dot />).toJSON();
    const dotWithPropsTree = renderer
      .create(<Dot size={18} color="#FEBF32" />)
      .toJSON();
    expect(defaultDotTree).toMatchSnapshot('Default Dot');
    expect(dotWithPropsTree).toMatchSnapshot('Dot With Props');
  });

  test('ensure Dot component color and size works correctly', () => {
    render(<Dot testID="atom-dot" size={18} color="#FEBF32" />);
    expect(screen.getByTestId('atom-dot')).toHaveStyle({
      width: 18,
      height: 18,
      backgroundColor: '#FEBF32',
    });
  });
});
