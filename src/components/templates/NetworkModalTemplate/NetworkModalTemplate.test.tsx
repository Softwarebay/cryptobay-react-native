import React from 'react';
import '@testing-library/jest-native';
import 'react-native';
import renderer from 'react-test-renderer';

import { NetworkModalTemplate } from './NetworkModalTemplate';

describe('NetworkModalTemplate Template', () => {
  test('Component Snapshot', () => {
    const tree = renderer
      .create(<NetworkModalTemplate onPressClose={jest.fn()} />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
