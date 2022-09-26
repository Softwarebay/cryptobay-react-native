import React from 'react';
import '@testing-library/jest-native';
import renderer from 'react-test-renderer';

import 'react-native';
import { Screens } from '../screens.enum';

import { HomeScreen } from './HomeScreen';

const mockNavigation = {
  navigate: jest.fn(),
};

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
});
