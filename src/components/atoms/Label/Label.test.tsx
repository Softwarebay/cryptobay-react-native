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

  test('ensure label variants works correctly', () => {
    const { rerender } = render(
      <Label value="19.2371 BNB" testID="atom-label" />,
    );
    const label = screen.getByTestId('atom-label');
    expect(label).toHaveTextContent('19.2371 BNB');
    expect(label).toHaveStyle({
      fontSize: 16,
      lineHeight: 24,
      fontWeight: '600',
    });
    rerender(<Label value="0x3Dc6...DfF9" variant="secondary" />);
    expect(label).toHaveTextContent('0x3Dc6...DfF9');
    expect(label).toHaveStyle({
      fontSize: 14,
      lineHeight: 24,
      fontWeight: '400',
    });
    rerender(<Label value="Wallet" color="#FEBF32" variant="tertiary" />);
    expect(label).toHaveTextContent('Wallet');
    expect(label).toHaveStyle({
      fontSize: 12,
      lineHeight: 18,
      fontWeight: '700',
    });
  });
});
