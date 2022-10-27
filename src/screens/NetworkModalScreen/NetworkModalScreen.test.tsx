import React from 'react';
import '@testing-library/jest-native';
import 'react-native';
import renderer from 'react-test-renderer';

import { Screens } from '../../screens.enum';

import { NetworkModalScreen } from './NetworkModalScreen';

const mockRoute = Screens.NETWORK as any;
const mockNavigation = {
  navigate: jest.fn(),
  goBack: jest.fn(),
} as any;

describe('NetworkModalScreen Screen', () => {
  test('Component Snapshot', () => {
    const tree = renderer.create(
      <NetworkModalScreen navigation={mockNavigation} route={mockRoute} />,
    );
    expect(tree).toMatchSnapshot();
  });
});
