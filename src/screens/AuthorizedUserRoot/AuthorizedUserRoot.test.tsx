import { NavigationContainer } from '@react-navigation/native';
import { fireEvent, render, screen } from '@testing-library/react-native';
import React from 'react';
import '@testing-library/jest-native';
import renderer from 'react-test-renderer';

import 'react-native';
import { Screens } from '../../screens.enum';

import { AuthorizedUserRoot } from './AuthorizedUserRoot';

const mockRoute = Screens.AUTHORIZED_USER_ROOT as any;
const mockNavigation = {
  navigate: jest.fn(),
  goBack: jest.fn(),
} as any;

describe('AuthorizedUserRoot Screen', () => {
  test('Component Snapshot', () => {
    const tree = renderer
      .create(
        <NavigationContainer>
          <AuthorizedUserRoot navigation={mockNavigation} route={mockRoute} />
        </NavigationContainer>,
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  test('ensure navigation works correctly', () => {
    render(
      <NavigationContainer>
        <AuthorizedUserRoot navigation={mockNavigation} route={mockRoute} />
      </NavigationContainer>,
    );
    const bottomBarTab = (tabName: string) =>
      screen.getByTestId(`bottom-navigation-${tabName}-tab`);
    fireEvent.press(bottomBarTab('wallet'));
    expect(mockNavigation.navigate).toHaveBeenCalledWith(Screens.HOME);
    fireEvent.press(bottomBarTab('swap'));
    expect(mockNavigation.navigate).toHaveBeenCalledWith(Screens.SWAP);
    fireEvent.press(bottomBarTab('settings'));
    expect(mockNavigation.navigate).toHaveBeenCalledWith(Screens.SETTINGS);
  });
});
