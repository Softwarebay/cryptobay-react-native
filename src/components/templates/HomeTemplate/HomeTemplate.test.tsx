import { render, screen } from '@testing-library/react-native';
import React from 'react';
import '@testing-library/jest-native';
import 'react-native';
import renderer from 'react-test-renderer';

import { etheriumTokenMock, tokensMock } from '../../../mocks';

import { HomeTemplate } from './HomeTemplate';

const mockOnPressAvatar = jest.fn();
const mockOnPressDropDown = jest.fn();
const mockOnPressSent = jest.fn();
const mockOnPressRecive = jest.fn();
const mockOnPressBuy = jest.fn();
const mockOnPressAddToken = jest.fn();
const mockOnPressToken = jest.fn();

describe('HomeTemplate Template', () => {
  test('Component Snapshot', () => {
    const tree = renderer
      .create(
        <HomeTemplate
          tokenName={etheriumTokenMock.name}
          tokenShortName={etheriumTokenMock.shortName}
          tokenPrice={etheriumTokenMock.price}
          tokenPercentagePoint={etheriumTokenMock.percentagePoint}
          tokenValue={etheriumTokenMock.value}
          tokens={tokensMock}
          onPressAvatar={mockOnPressAvatar}
          onPressDropDown={mockOnPressDropDown}
          onPressSent={mockOnPressSent}
          onPressRecive={mockOnPressRecive}
          onPressBuy={mockOnPressBuy}
          onPressAddToken={mockOnPressAddToken}
          onPressToken={mockOnPressToken}
        />,
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  test('ensure token percentage point renders correctly', () => {
    const { rerender } = render(
      <HomeTemplate
        tokenName={etheriumTokenMock.name}
        tokenShortName={etheriumTokenMock.shortName}
        tokenPrice={etheriumTokenMock.price}
        tokenPercentagePoint={etheriumTokenMock.percentagePoint}
        tokenValue={etheriumTokenMock.value}
        tokens={tokensMock}
        onPressAvatar={mockOnPressAvatar}
        onPressDropDown={mockOnPressDropDown}
        onPressSent={mockOnPressSent}
        onPressRecive={mockOnPressRecive}
        onPressBuy={mockOnPressBuy}
        onPressAddToken={mockOnPressAddToken}
        onPressToken={mockOnPressToken}
      />,
    );
    const tokenPercentagePoint = screen.getByTestId(
      'home-template-token-percentage-point',
    );
    expect(tokenPercentagePoint).toHaveStyle({ color: '#76E268' });
    expect(tokenPercentagePoint).toHaveTextContent('+0.7%');
    rerender(
      <HomeTemplate
        tokenName={etheriumTokenMock.name}
        tokenShortName={etheriumTokenMock.shortName}
        tokenPrice={etheriumTokenMock.price}
        tokenPercentagePoint={-2.34}
        tokenValue={etheriumTokenMock.value}
        tokens={tokensMock}
        onPressAvatar={mockOnPressAvatar}
        onPressDropDown={mockOnPressDropDown}
        onPressSent={mockOnPressSent}
        onPressRecive={mockOnPressRecive}
        onPressBuy={mockOnPressBuy}
        onPressAddToken={mockOnPressAddToken}
        onPressToken={mockOnPressToken}
      />,
    );
    expect(tokenPercentagePoint).toHaveStyle({ color: '#EA3943' });
    expect(tokenPercentagePoint).toHaveTextContent('-2.34%');
  });
});
