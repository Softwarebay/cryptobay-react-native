import { fireEvent, render, screen } from '@testing-library/react-native';
import React from 'react';
import '@testing-library/jest-native';
import renderer from 'react-test-renderer';

import 'react-native';
import { bnbSwapsHistory } from '../../../mocks';

import { SwapsList } from './SwapsList';
import { SwapsListItem } from './SwapsListItem';

const mockOnPressDetails = jest.fn();

describe('SwapsList Organism', () => {
  test('Component Snapshot', () => {
    const tree = renderer
      .create(
        <SwapsList
          tokenShortName="BNB"
          swapsHistory={bnbSwapsHistory}
          onPressDetails={mockOnPressDetails}
        />,
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  test('ensure swap list item navigate to item', () => {
    render(
      <SwapsListItem
        testID="swap-list-item"
        date="Mar 3 at 10:04am"
        operation="Received"
        status="Confirmed"
        value={0.04}
        valueInDolar={9.58799}
        from="0x3Dc6...DfCE"
        to="0x3Dc6...DfCE"
        tokenShortName="BNB"
        onPressDetails={mockOnPressDetails}
      />,
    );
    fireEvent.press(screen.getByTestId('swap-list-item'));
    expect(mockOnPressDetails).toHaveBeenCalledWith({
      shortName: 'BNB',
      operation: 'Received BNB',
      status: 'Confirmed',
      date: 'Mar 3 at 10:04am',
      value: 0.04,
      from: '0x3Dc6...DfCE',
      to: '0x3Dc6...DfCE',
    });
  });
});
