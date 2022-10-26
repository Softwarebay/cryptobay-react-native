import { fireEvent, render, screen } from '@testing-library/react-native';
import React from 'react';
import '@testing-library/jest-native';
import renderer from 'react-test-renderer';

import 'react-native';
import { BALL } from '../../../../assets/pictures';
import { tokensMock } from '../../../mocks';
import { Token } from '../../../types/token.type';

import { TokenList } from './TokenList';

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
    render(<TokenList tokens={tokensMock} onPressToken={mockOnPressToken} />);
    fireEvent.press(screen.getByTestId('token-list-item-BNB'));
    expect(mockOnPressToken).toHaveBeenCalledWith({
      shortName: 'BNB',
      value: 19.2371,
      price: 226.69,
    });
  });

  test('ensure token list item picture works correctly', () => {
    const newToken = {
      picture: BALL,
      name: 'Ball Coin',
      shortName: 'BLC',
      percentagePoint: 2,
      value: 123.45,
    } as Token;
    const updatedTokenMock = tokensMock;
    updatedTokenMock.push(newToken);
    render(
      <TokenList tokens={updatedTokenMock} onPressToken={mockOnPressToken} />,
    );
    const tokenPicture = (tokenShortName: string) =>
      screen.getByTestId(`token-list-item-${tokenShortName}-picture`);
    expect(tokenPicture('BNB')).toHaveProp('source', 0);
    expect(tokenPicture('BLC')).toHaveProp('source', BALL);
  });
});
