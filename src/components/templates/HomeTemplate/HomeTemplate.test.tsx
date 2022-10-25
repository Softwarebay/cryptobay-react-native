import { render, screen } from '@testing-library/react-native';
import React from 'react';
import '@testing-library/jest-native';
import 'react-native';
import renderer from 'react-test-renderer';

import { etheriumTokenMock, tokensMock } from '../../../mocks';
import { Screens } from '../../../screens.enum';

import { HomeTemplate } from './HomeTemplate';

const mockOnPressDropDown = jest.fn();
const mockOnPressSent = jest.fn();
const mockOnPressRecive = jest.fn();
const mockOnPressBuy = jest.fn();
const mockOnPressAddToken = jest.fn();
const mockOnHomeNavigate = jest.fn();
const mockOnSwapNavigate = jest.fn();
const mockOnSettingsNavigate = jest.fn();
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
          routeName={Screens.HOME}
          onPressDropDown={mockOnPressDropDown}
          onPressSent={mockOnPressSent}
          onPressRecive={mockOnPressRecive}
          onPressBuy={mockOnPressBuy}
          onPressAddToken={mockOnPressAddToken}
          onHomeNavigate={mockOnHomeNavigate}
          onSwapNavigate={mockOnSwapNavigate}
          onSettingsNavigate={mockOnSettingsNavigate}
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
        routeName={Screens.HOME}
        onPressDropDown={mockOnPressDropDown}
        onPressSent={mockOnPressSent}
        onPressRecive={mockOnPressRecive}
        onPressBuy={mockOnPressBuy}
        onPressAddToken={mockOnPressAddToken}
        onHomeNavigate={mockOnHomeNavigate}
        onSwapNavigate={mockOnSwapNavigate}
        onSettingsNavigate={mockOnSettingsNavigate}
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
        routeName={Screens.HOME}
        onPressDropDown={mockOnPressDropDown}
        onPressSent={mockOnPressSent}
        onPressRecive={mockOnPressRecive}
        onPressBuy={mockOnPressBuy}
        onPressAddToken={mockOnPressAddToken}
        onHomeNavigate={mockOnHomeNavigate}
        onSwapNavigate={mockOnSwapNavigate}
        onSettingsNavigate={mockOnSettingsNavigate}
        onPressToken={mockOnPressToken}
      />,
    );
    expect(tokenPercentagePoint).toHaveStyle({ color: '#EA3943' });
    expect(tokenPercentagePoint).toHaveTextContent('-2.34%');
  });
});
