import { fireEvent, render, screen } from '@testing-library/react-native';
import React from 'react';
import '@testing-library/jest-native';
import renderer from 'react-test-renderer';

import 'react-native';
import { Screens } from '../../screens.enum';

import { TokenScreen } from './TokenScreen';

const mockNavigation = {
  navigate: jest.fn(),
  goBack: jest.fn(),
};

const tokenScreenRoute = {
  key: '',
  name: Screens.TOKEN,
  params: {
    tokenDetails: {
      shortName: 'BNB',
      value: 19.2371,
      price: 4360.8582,
    },
  },
} as any;

console.log = jest.fn();

describe('TokenScreen Screen', () => {
  test('Component Snapshot', () => {
    const tree = renderer.create(
      <TokenScreen
        navigation={mockNavigation as any}
        route={tokenScreenRoute}
      />,
    );
    expect(tree).toMatchSnapshot();
  });

  test('ensure actions works correctly', () => {
    render(
      <TokenScreen
        navigation={mockNavigation as any}
        route={tokenScreenRoute}
      />,
    );
    const actionButton = (actinButtonName: string) =>
      screen.getByTestId(`token-template-action-${actinButtonName}`);
    fireEvent.press(actionButton('sent'));
    expect(console.log).toHaveBeenCalledWith('onPressSent');
    fireEvent.press(actionButton('receive'));
    expect(console.log).toHaveBeenCalledWith('onPressRecive');
  });

  test('ensure navigation works correctly', () => {
    render(
      <TokenScreen
        navigation={mockNavigation as any}
        route={tokenScreenRoute}
      />,
    );
    fireEvent.press(screen.getByTestId('token-template-navigation-back'));
    expect(mockNavigation.goBack).toHaveBeenCalled();
  });

  test('ensure navigation of swap list item works correctly', () => {
    render(
      <TokenScreen
        navigation={mockNavigation as any}
        route={tokenScreenRoute}
      />,
    );
    fireEvent.press(screen.getByTestId('swap-list-item-1'));
    expect(mockNavigation.navigate).toHaveBeenCalledWith(Screens.DETAILS, {
      swapDetails: {
        shortName: 'BNB',
        operation: 'Received BNB',
        status: 'Confirmed',
        date: 'Mar 3 at 10:04am',
        value: 0.04,
        from: '0x3Dc6...DfCE',
        to: '0x3Dc6...DfCE',
      },
    });
  });
});
