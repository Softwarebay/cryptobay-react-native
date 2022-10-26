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
    expect(console.log).toHaveBeenCalledWith('onPressDropDown');
    fireEvent.press(actionButton('sent'));
    expect(console.log).toHaveBeenCalledWith('onPressSent');
    fireEvent.press(actionButton('recive'));
    expect(console.log).toHaveBeenCalledWith('onPressRecive');
    fireEvent.press(actionButton('buy'));
    expect(console.log).toHaveBeenCalledWith('onPressBuy');
    fireEvent.press(actionButton('add-token'));
    expect(console.log).toHaveBeenCalledWith('onPressAddToken');
  });
});
