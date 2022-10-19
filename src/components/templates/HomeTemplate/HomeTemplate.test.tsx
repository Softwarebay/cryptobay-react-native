import { render, screen } from '@testing-library/react-native';
import React from 'react';
import '@testing-library/jest-native';
import 'react-native';
import renderer from 'react-test-renderer';

import { etheriumTokenMock, tokensMock } from '../../../mocks';
import { Screens } from '../../../screens.enum';

import { HomeTemplate } from './HomeTemplate';

const mockOnDropDown = jest.fn();
const mockOnSent = jest.fn();
const mockOnRecive = jest.fn();
const mockOnBuy = jest.fn();
const mockOnAddToken = jest.fn();
const mockOnHomeNavigate = jest.fn();
const mockOnSwapNavigate = jest.fn();
const mockOnSettingsNavigate = jest.fn();
const mockOnTokenNavigate = jest.fn();

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
          onDropDown={mockOnDropDown}
          onSent={mockOnSent}
          onRecive={mockOnRecive}
          onBuy={mockOnBuy}
          onAddToken={mockOnAddToken}
          onHomeNavigate={mockOnHomeNavigate}
          onSwapNavigate={mockOnSwapNavigate}
          onSettingsNavigate={mockOnSettingsNavigate}
          onTokenNavigate={mockOnTokenNavigate}
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
        onDropDown={mockOnDropDown}
        onSent={mockOnSent}
        onRecive={mockOnRecive}
        onBuy={mockOnBuy}
        onAddToken={mockOnAddToken}
        onHomeNavigate={mockOnHomeNavigate}
        onSwapNavigate={mockOnSwapNavigate}
        onSettingsNavigate={mockOnSettingsNavigate}
        onTokenNavigate={mockOnTokenNavigate}
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
        onDropDown={mockOnDropDown}
        onSent={mockOnSent}
        onRecive={mockOnRecive}
        onBuy={mockOnBuy}
        onAddToken={mockOnAddToken}
        onHomeNavigate={mockOnHomeNavigate}
        onSwapNavigate={mockOnSwapNavigate}
        onSettingsNavigate={mockOnSettingsNavigate}
        onTokenNavigate={mockOnTokenNavigate}
      />,
    );
    expect(tokenPercentagePoint).toHaveStyle({ color: '#EA3943' });
    expect(tokenPercentagePoint).toHaveTextContent('-2.34%');
  });
});
