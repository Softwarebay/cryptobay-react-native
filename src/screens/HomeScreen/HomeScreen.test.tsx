import { fireEvent, render, screen } from '@testing-library/react-native';
import React from 'react';
import '@testing-library/jest-native';
import renderer from 'react-test-renderer';

import 'react-native';
import { Screens } from '../../screens.enum';

import { HomeScreen } from './HomeScreen';

const mockRoute = Screens.HOME as any;
const mockNavigation = {
  navigate: jest.fn(),
} as any;

console.log = jest.fn();

describe('HomeScreen Screen', () => {
  test('Component Snapshot', () => {
    const tree = renderer
      .create(<HomeScreen navigation={mockNavigation} route={mockRoute} />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  test('ensure homebar and actions button works', () => {
    render(<HomeScreen navigation={mockNavigation} route={mockRoute} />);
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

  test('ensure navigation token list item works correctly', () => {
    render(<HomeScreen navigation={mockNavigation} route={mockRoute} />);
    fireEvent.press(screen.getByTestId('token-list-item-BNB'));
    expect(mockNavigation.navigate).toHaveBeenCalledWith(Screens.TOKEN, {
      tokenDetails: {
        price: 226.69,
        shortName: 'BNB',
        value: 19.2371,
      },
    });
  });
});
