import { fireEvent, render, screen } from '@testing-library/react-native';
import React from 'react';
import '@testing-library/jest-native';
import 'react-native';
import renderer from 'react-test-renderer';

import { Screens } from '../../screens.enum';

import { WalthoughtScreen } from './WalthoughtScreen';

const mockRoute = Screens.WALTHOUGHT as any;
const mockNavigation = {
  navigate: jest.fn(),
} as any;

describe('WalthoughtScreen Screen', () => {
  test('Component Snapshot', () => {
    const tree = renderer.create(
      <WalthoughtScreen navigation={mockNavigation} route={mockRoute} />,
    );
    expect(tree).toMatchSnapshot();
  });

  test('ensure navigation works correctly', () => {
    render(<WalthoughtScreen navigation={mockNavigation} route={mockRoute} />);
    const carouselButton = screen.getByTestId('walthought-carousel-button');
    fireEvent.press(carouselButton);
    expect(mockNavigation.navigate).not.toHaveBeenCalled();
    fireEvent.press(carouselButton);
    expect(mockNavigation.navigate).not.toHaveBeenCalled();
    fireEvent.press(carouselButton);
    expect(mockNavigation.navigate).toHaveBeenCalledWith(Screens.WALLET_SETUP);
  });
});
