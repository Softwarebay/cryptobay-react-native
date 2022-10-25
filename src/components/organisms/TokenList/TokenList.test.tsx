import { fireEvent, render, screen } from '@testing-library/react-native';
import React from 'react';
import '@testing-library/jest-native';
import renderer from 'react-test-renderer';

import 'react-native';
import { PROFILE } from '../../../../assets/pictures';
import { tokensMock } from '../../../mocks';

import { TokenList } from './TokenList';
import { TokenListItem } from './TokenListItem';

const mockOnPressToken = jest.fn();

describe('TokenList Organism', () => {
  test('Component Snapshot', () => {
    const tree = renderer
      .create(<TokenList tokens={tokensMock} onPressToken={mockOnPressToken} />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  test('ensure changing tabs works correctly', () => {
    render(<TokenList tokens={tokensMock} onPressToken={mockOnPressToken} />);
    const tokenTab = screen.getByTestId('token-list-token-tab');
    const collectiblesTab = screen.getByTestId('token-list-collectibles-tab');
    const currentTabstyle = {
      borderBottomWidth: 2,
      borderColor: '#FFFFFF',
    };
    fireEvent.press(tokenTab);
    expect(tokenTab).toHaveStyle(currentTabstyle);
    fireEvent.press(collectiblesTab);
    expect(collectiblesTab).toHaveStyle(currentTabstyle);
  });

  test('ensure token list navigate works', () => {
    render(
      <TokenListItem
        name="Binance Coin"
        shortName="BNB"
        price={226.69}
        percentagePoint={226.69}
        value={19.2371}
        testID="token-list-item"
        onPressToken={mockOnPressToken}
      />,
    );
    fireEvent.press(screen.getByTestId('token-list-item'));
    expect(mockOnPressToken).toHaveBeenCalledWith({
      shortName: 'BNB',
      value: 19.2371,
      price: 226.69,
    });
  });

  test('ensure token list item picture works correctly', () => {
    const { rerender } = render(
      <TokenListItem
        name="Binance Coin"
        shortName="BNB"
        price={226.69}
        percentagePoint={226.69}
        value={19.2371}
        testID="token-list-item"
        onPressToken={mockOnPressToken}
      />,
    );
    const tokenPicture = screen.getByTestId('token-list-item-token-picture');
    expect(tokenPicture).toHaveProp('source', 0);
    rerender(
      <TokenListItem
        picture={PROFILE}
        name="Binance Coin"
        shortName="BNB"
        price={226.69}
        percentagePoint={226.69}
        value={19.2371}
        testID="token-list-item"
        onPressToken={mockOnPressToken}
      />,
    );
    expect(tokenPicture).toHaveProp('source', PROFILE);
  });
});
