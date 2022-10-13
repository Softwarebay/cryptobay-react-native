import { fireEvent, render, screen } from '@testing-library/react-native';
import React from 'react';
import '@testing-library/jest-native';
import renderer from 'react-test-renderer';

import 'react-native';
import { BottomNavigation } from './BottomNavigation';
import { Screens } from '../../../screens.enum';

const mockOnHomeNavigate = jest.fn();
const mockOnSwapNavigate = jest.fn();
const mockOnSettingsNavigate = jest.fn();

describe('BottomNavigation Organism', () => {
  test('Component Snapshot', () => {
    const tree = renderer
      .create(
        <BottomNavigation
          routeName={Screens.HOME}
          onHomeNavigate={mockOnHomeNavigate}
          onSwapNavigate={mockOnSwapNavigate}
          onSettingsNavigate={mockOnSettingsNavigate}
        />,
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  test('ensure bottom navigation bar styles works', () => {
    render(
      <BottomNavigation
        routeName={Screens.HOME}
        onHomeNavigate={mockOnHomeNavigate}
        onSwapNavigate={mockOnSwapNavigate}
        onSettingsNavigate={mockOnSettingsNavigate}
      />,
    );
    const navigationTab = (tabName: string) =>
      screen.getByTestId(`${tabName}-tab-label`);
    expect(navigationTab('wallet')).toHaveStyle({ color: '#FEBF32' });
    expect(navigationTab('swap')).toHaveStyle({ color: '#ABAFC4' });
    expect(navigationTab('settings')).toHaveStyle({ color: '#ABAFC4' });
  });

  test('ensure navigation works correctly', () => {
    render(
      <BottomNavigation
        routeName={Screens.HOME}
        onHomeNavigate={mockOnHomeNavigate}
        onSwapNavigate={mockOnSwapNavigate}
        onSettingsNavigate={mockOnSettingsNavigate}
      />,
    );
    const navigationTab = (tabName: string) =>
      screen.getByTestId(`bottom-navigation-${tabName}-tab`);
    fireEvent.press(navigationTab('wallet'));
    expect(mockOnHomeNavigate).toHaveBeenCalled();
    fireEvent.press(navigationTab('swap'));
    expect(mockOnHomeNavigate).toHaveBeenCalled();
    fireEvent.press(navigationTab('settings'));
    expect(mockOnHomeNavigate).toHaveBeenCalled();
  });
});
