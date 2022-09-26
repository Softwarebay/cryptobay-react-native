import { render, screen } from '@testing-library/react-native';
import React from 'react';
import '@testing-library/jest-native';
import renderer from 'react-test-renderer';

import 'react-native';
import { Label } from './Label';

describe('Label Atom', () => {
  test('Component Snapshot', () => {
    const tree = renderer.create(<Label value="Next" />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  test('ensure label value renders correctly', () => {
    render(<Label value="Next" testID="atom-label" />);
    expect(screen.getByTestId('atom-label')).toHaveTextContent('Next');
  });

  test('ensure Label components styling correctly', () => {
    render(
      <Label
        value="Millions of people participate"
        testID="atom-label"
        fontSize={40}
        lineHeight={56}
        color="#FEBF32"
        fontWeight="300"
      />,
    );
    expect(screen.getByTestId('atom-label')).toHaveStyle({
      fontSize: 40,
      lineHeight: 56,
      color: '#FEBF32',
      fontWeight: '300',
    });
  });
});
