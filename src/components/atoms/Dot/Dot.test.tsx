import { render, screen } from '@testing-library/react-native';
import React from 'react';
import '@testing-library/jest-native';
import renderer from 'react-test-renderer';

import 'react-native';
import { Dot } from './Dot';

describe('Dot Atom', () => {
  test('Comonent Snapshot', () => {
    const tree = renderer.create(<Dot />).toJSON();
    expect(tree).toMatchSnapshot();
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
