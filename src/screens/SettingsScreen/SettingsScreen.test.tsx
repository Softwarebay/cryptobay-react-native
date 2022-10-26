import { fireEvent, render, screen } from '@testing-library/react-native';
import React from 'react';
import '@testing-library/jest-native';
import 'react-native';
import renderer from 'react-test-renderer';

import { Screens } from '../../screens.enum';

import { SettingsScreen } from './SettingsScreen';

const mockRoute = Screens.SWAP as any;
const mockNavigation = {
  navigate: jest.fn(),
  goBack: jest.fn(),
} as any;

describe('SwapScreen Screen', () => {
  test('Component Snapshot', () => {
    const tree = renderer
      .create(<SettingsScreen navigation={mockNavigation} route={mockRoute} />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  test('ensure navigation works correctly', () => {
    render(<SettingsScreen navigation={mockNavigation} route={mockRoute} />);
    fireEvent.press(screen.getByTestId('settings-screen-back-button'));
    expect(mockNavigation.goBack).toHaveBeenCalled();
  });
});
