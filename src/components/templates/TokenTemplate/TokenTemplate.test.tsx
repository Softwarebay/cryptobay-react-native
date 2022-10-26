import React from 'react';
import '@testing-library/jest-native';
import 'react-native';
import renderer from 'react-test-renderer';

import { bnbSwapsHistory } from '../../../mocks';

import { TokenTemplate } from './TokenTemplate';

const mockOnSent = jest.fn();
const mockOnReceive = jest.fn();
const mockOnPressDetails = jest.fn();
const mockOnPressBack = jest.fn();

describe('TokenTemplate Template', () => {
  test('Component Snapshot', () => {
    const tree = renderer
      .create(
        <TokenTemplate
          tokenShortName="BNB"
          tokenValue={19.2371}
          tokenPrice={4360.8582}
          tokenSwapHistory={bnbSwapsHistory}
          onPressSent={mockOnSent}
          onPressReceive={mockOnReceive}
          onPressDetails={mockOnPressDetails}
          onPressBack={mockOnPressBack}
        />,
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
