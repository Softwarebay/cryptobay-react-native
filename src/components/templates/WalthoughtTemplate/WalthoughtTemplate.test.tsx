import React from 'react';
import '@testing-library/jest-native';
import 'react-native';
import renderer from 'react-test-renderer';

import { WalthoughtTemplate } from './WalthoughtTemplate';

const mockOnCarouselSlidesEnd = jest.fn();

describe('WalthoughtTemplate Template', () => {
  test('Component Snapshot', () => {
    const tree = renderer
      .create(
        <WalthoughtTemplate onCarouselSlidesEnd={mockOnCarouselSlidesEnd} />,
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
