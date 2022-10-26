import { fireEvent, render, screen } from '@testing-library/react-native';
import React from 'react';
import '@testing-library/jest-native';
import 'react-native';
import renderer from 'react-test-renderer';

import { Screens } from '../../screens.enum';

import { SwapScreen } from './SwapScreen';

const mockNavigation = {
  navigate: jest.fn(),
  goBack: jest.fn(),
};

describe('SwapScreen Screen', () => {
  test('Component Snapshot', () => {
    const tree = renderer
      .create(
        <SwapScreen
          navigation={mockNavigation as any}
          route={Screens.SWAP as any}
        />,
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  test('ensure navigation works correctly', () => {
    render(
      <SwapScreen
        navigation={mockNavigation as any}
        route={Screens.SWAP as any}
      />,
    );
    fireEvent.press(screen.getByTestId('swap-screen-back-button'));
    expect(mockNavigation.goBack).toHaveBeenCalled();
  });
});
