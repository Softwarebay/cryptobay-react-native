import { render, screen } from '@testing-library/react-native';
import React from 'react';
import '@testing-library/jest-native';
import renderer from 'react-test-renderer';

import 'react-native';
import { TockenListItem } from './TockenListItem';

describe('TockenListItem Molecule', () => {
  test('Component Snapshot', () => {
    const tree = renderer
      .create(
        <TockenListItem
          tockenPicture={0}
          tockenName={''}
          tockenDolarValue={''}
          tockenPercentValueChange={0}
          tockenValue={''}
        />,
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
