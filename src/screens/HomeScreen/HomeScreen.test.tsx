import { fireEvent, render, screen } from '@testing-library/react-native';
import React from 'react';
import '@testing-library/jest-native';
import renderer from 'react-test-renderer';

import 'react-native';
import { Screens } from '../../screens.enum';

import { HomeScreen } from './HomeScreen';

const mockNavigation = {
  navigate: jest.fn(),
};

console.log = jest.fn();

describe('HomeScreen Screen', () => {
  test('Component Snapshot', () => {
    const tree = renderer
      .create(
        <HomeScreen
          navigation={mockNavigation as any}
          route={Screens.HOME as any}
        />,
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  test('ensure homebar and actions button works', () => {
    render(
      <HomeScreen
        navigation={mockNavigation as any}
        route={Screens.HOME as any}
      />,
    );
    const actionButton = (buttonName: string) =>
      screen.getByTestId(`home-action-${buttonName}`);
    fireEvent.press(screen.getByTestId('home-bar-drop-down'));
    expect(console.log).toHaveBeenCalledWith('onDropDown');
    fireEvent.press(actionButton('sent'));
    expect(console.log).toHaveBeenCalledWith('onSent');
    fireEvent.press(actionButton('recive'));
    expect(console.log).toHaveBeenCalledWith('onRecive');
    fireEvent.press(actionButton('buy'));
    expect(console.log).toHaveBeenCalledWith('onBuy');
    fireEvent.press(actionButton('add-token'));
    expect(console.log).toHaveBeenCalledWith('onAddToken');
  });

  test('ensure navigation works', () => {
    render(
      <HomeScreen
        navigation={mockNavigation as any}
        route={Screens.HOME as any}
      />,
    );
    const navigationTab = (tabName: string) =>
      screen.getByTestId(`bottom-navigation-${tabName}-tab`);
    fireEvent.press(navigationTab('wallet'));
    expect(mockNavigation.navigate).toHaveBeenCalledWith(Screens.HOME);
    fireEvent.press(navigationTab('swap'));
    expect(mockNavigation.navigate).toHaveBeenCalledWith(Screens.SWAP);
    fireEvent.press(navigationTab('settings'));
    expect(mockNavigation.navigate).toHaveBeenCalledWith(Screens.SETTINGS);
  });
});
