import { render, screen } from '@testing-library/react-native';
import React from 'react';
import '@testing-library/jest-native';
import renderer from 'react-test-renderer';

import 'react-native';
import { Icons } from '../../atoms/Icon/icons.enum';

import { IconedTab } from './IconedTab';

const mockOnPress = jest.fn();

describe('Iconed Tab Molecule', () => {
  test('Component Snapshot', () => {
    const tree = renderer
      .create(
        <IconedTab
          label="Wallet"
          checked={false}
          iconType={Icons.WALLET}
          onPress={mockOnPress}
        />,
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  test('ensure iconed tab is checkable', () => {
    const { rerender } = render(
      <IconedTab
        label="Settings"
        checked={false}
        iconType={Icons.SETTINGS}
        onPress={mockOnPress}
        testID="molecule-iconed-tab"
        labelTestID="iconed-tab-label"
        iconTestID="iconed-tab-icon"
      />,
    );
    const label = screen.getByTestId('iconed-tab-label');
    expect(label).toHaveStyle({
      color: '#ABAFC4',
    });
    expect(label).toHaveTextContent('Settings');
    rerender(
      <IconedTab
        label="Swap"
        checked={true}
        iconType={Icons.SWAP}
        onPress={mockOnPress}
        testID="molecule-iconed-tab"
        labelTestID="iconed-tab-label"
        iconTestID="iconed-tab-icon"
      />,
    );
    expect(label).toHaveStyle({
      color: '#FEBF32',
    });
  });

  test('ensure icons renders correctly', () => {
    render(
      <IconedTab
        label="Sent"
        checked={false}
        iconType={Icons.ARROW}
        onPress={mockOnPress}
        testID="molecule-iconed-tab"
        labelTestID="iconed-tab-label"
        iconTestID="iconed-tab-icon"
      />,
    );
    expect(screen.queryByTestId('svg-icon-arrow')).not.toBeNull();
  });
});
