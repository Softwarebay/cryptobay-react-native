import { fireEvent, render, screen } from '@testing-library/react-native';
import React from 'react';
import '@testing-library/jest-native';
import 'react-native';
import renderer from 'react-test-renderer';

import { Screens } from '../../screens.enum';

import { SettingsScreen } from './SettingsScreen';

const mockNavigation = {
  navigate: jest.fn(),
  goBack: jest.fn(),
};

describe('SwapScreen Screen', () => {
  test('Component Snapshot', () => {
    const tree = renderer
      .create(
        <SettingsScreen
          navigation={mockNavigation as any}
          route={Screens.SWAP as any}
        />,
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  test('ensure navigation works correctly', () => {
    render(
      <SettingsScreen
        navigation={mockNavigation as any}
        route={Screens.SWAP as any}
      />,
    );
    const bottomNavigationTab = (tabName: string) =>
      screen.getByTestId(`bottom-navigation-${tabName}-tab`);
    fireEvent.press(bottomNavigationTab('wallet'));
    expect(mockNavigation.navigate).toHaveBeenCalledWith(Screens.HOME);
    fireEvent.press(bottomNavigationTab('swap'));
    expect(mockNavigation.navigate).toHaveBeenCalledWith(Screens.SWAP);
    fireEvent.press(bottomNavigationTab('settings'));
    expect(mockNavigation.navigate).toHaveBeenCalledWith(Screens.SETTINGS);
    fireEvent.press(screen.getByTestId('settings-screen-back-button'));
    expect(mockNavigation.goBack).toHaveBeenCalled();
  });
});
