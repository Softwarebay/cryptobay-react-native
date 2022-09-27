import { render, screen } from '@testing-library/react-native';
import React from 'react';
import '@testing-library/jest-native';
import renderer from 'react-test-renderer';

import 'react-native';
import { Caption } from './Caption';

describe('Caption Atom', () => {
  test('Coponent Snapshot', () => {
    const tree = renderer.create(<Caption value="$9.58799" />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  test('ensure variant add specific color style rule', () => {
    const { rerender } = render(
      <Caption value="$9.58799" testID="atom-caption" />,
    );
    const caption = screen.getByTestId('atom-caption');
    expect(caption).toHaveTextContent('$9.58799');
    expect(caption).toHaveStyle({ color: '#ABAFC4' });
    rerender(
      <Caption
        value="Mar 3 at 10:04am"
        variant="white"
        testID="atom-caption"
      />,
    );
    expect(caption).toHaveTextContent('Mar 3 at 10:04am');
    expect(caption).toHaveStyle({ color: '#FFFFFF' });
  });
});
