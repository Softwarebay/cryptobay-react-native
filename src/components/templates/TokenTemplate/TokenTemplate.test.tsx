import React from 'react';
import '@testing-library/jest-native';
import 'react-native';
import renderer from 'react-test-renderer';

import { bnbSwapsHistory } from '../../../mocks';
import { Screens } from '../../../screens.enum';

import { TokenTemplate } from './TokenTemplate';

const mockOnGoBack = jest.fn();
const mockOnSent = jest.fn();
const mockOnReceive = jest.fn();
const mockOnHomeNavigate = jest.fn();
const mockOnSwapNavigate = jest.fn();
const mockOnSettingsNavigate = jest.fn();
const mockOnDetailsNavigate = jest.fn();

describe('TokenTemplate Template', () => {
  test('Component Snapshot', () => {
    const tree = renderer
      .create(
        <TokenTemplate
          tokenShortName="BNB"
          tokenValue={19.2371}
          tokenPrice={4360.8582}
          tokenSwapHistory={bnbSwapsHistory}
          routeName={Screens.TOKEN}
          onGoBack={mockOnGoBack}
          onSent={mockOnSent}
          onReceive={mockOnReceive}
          onHomeNavigate={mockOnHomeNavigate}
          onSwapNavigate={mockOnSwapNavigate}
          onSettingsNavigate={mockOnSettingsNavigate}
          onDetailsNavigate={mockOnDetailsNavigate}
        />,
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
