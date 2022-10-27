import { fireEvent, render, screen } from '@testing-library/react-native';
import React from 'react';
import '@testing-library/jest-native';
import 'react-native';
import renderer from 'react-test-renderer';

import { Screens } from '../../screens.enum';

import { WalletSetupScreen } from './WalletSetupScreen';

const mockRoute = Screens.WALLET_SETUP as any;
const mockNavigation = {
  navigate: jest.fn(),
} as any;

describe('WalletSetupScreen Screen', () => {
  test('Component Snapshot', () => {
    const tree = renderer
      .create(
        <WalletSetupScreen navigation={mockNavigation} route={mockRoute} />,
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  test('ensure wallet setup works correctly', () => {
    render(<WalletSetupScreen navigation={mockNavigation} route={mockRoute} />);
    const button = (buttonName: string) =>
      screen.getByTestId(`wallet-setup-${buttonName}`);
    fireEvent.press(button('import'));
    expect(mockNavigation.navigate).toHaveBeenCalledWith(
      Screens.AUTHORIZED_USER_ROOT,
      { screen: Screens.HOME },
    );
    fireEvent.press(button('create-new'));
    expect(mockNavigation.navigate).toHaveBeenCalledWith(
      Screens.AUTHORIZED_USER_ROOT,
      { screen: Screens.HOME },
    );
  });
});
