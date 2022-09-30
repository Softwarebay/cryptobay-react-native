import { fireEvent, render, screen } from '@testing-library/react-native';
import React from 'react';
import '@testing-library/jest-native';
import renderer from 'react-test-renderer';

import 'react-native';
import { DecoratedTab } from './DecoratedTab';

const mockOnPress = jest.fn();

describe('DecoratedTab Molecule', () => {
  test('Component Snapshot', () => {
    const tree = renderer.create(
      <DecoratedTab label={''} checked={false} onPress={mockOnPress} />,
    );
    expect(tree).toMatchSnapshot();
  });

  test('ensure decorated tab is checkable', () => {
    const { rerender } = render(
      <DecoratedTab
        label="Token"
        checked={false}
        onPress={mockOnPress}
        testID="molecule-decorated-tab"
        labelTestID="decorated-tab-label"
      />,
    );
    const label = screen.getByTestId('decorated-tab-label');
    expect(label).toHaveStyle({
      color: '#888DAA',
    });
    expect(label).toHaveTextContent('Token');
    rerender(
      <DecoratedTab
        label="Token"
        checked={true}
        onPress={mockOnPress}
        testID="molecule-decorated-tab"
        labelTestID="decorated-tab-label"
      />,
    );
    expect(label).toHaveStyle({
      color: '#FFFFFF',
    });
  });

  test('ensure onPress works correctly', () => {
    render(
      <DecoratedTab
        label="Token"
        checked={false}
        onPress={mockOnPress}
        testID="molecule-decorated-tab"
      />,
    );
    fireEvent.press(screen.getByTestId('molecule-decorated-tab'));
    expect(mockOnPress).toHaveBeenCalled();
  });
});
