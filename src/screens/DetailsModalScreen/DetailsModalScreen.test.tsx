import { fireEvent, render, screen } from '@testing-library/react-native';
import React from 'react';
import '@testing-library/jest-native';
import renderer from 'react-test-renderer';

import 'react-native';
import { Screens } from '../../screens.enum';

import { DetailsModalScreen } from './DetailsModalScreen';

const detailsModalScreenRoute = {
  key: '',
  name: Screens.DETAILS,
  params: {
    swapDetails: {
      shortName: 'BNB',
      operation: 'Received',
      status: 'Cancelled',
      date: 'Mar 3 at 10:04am',
      value: 0.04,
      from: '0x3Dc6...DfCE',
      to: '0x3Dc6...DfCE',
    },
  },
} as any;
const detailsModalScreenEmptyRoute = {
  key: '',
  name: Screens.DETAILS,
  params: {
    swapDetails: {},
  },
} as any;
const mockNavigation = {
  navigate: jest.fn(),
  goBack: jest.fn(),
} as any;

describe('DetailsModalScreen', () => {
  test('Component Snapshot', () => {
    const tree = renderer
      .create(
        <DetailsModalScreen
          navigation={mockNavigation}
          route={detailsModalScreenRoute}
        />,
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  test('ensure finding token works correctly', () => {
    render(
      <DetailsModalScreen
        navigation={mockNavigation}
        route={detailsModalScreenRoute}
      />,
    );
    expect(
      screen.getByTestId('details-modal-template-total-amount'),
    ).toHaveTextContent('19.2371 BNB');
    expect(
      screen.getByTestId('details-modal-template-total-amount-dolars'),
    ).toHaveTextContent('$4360.858199');
    expect(
      screen.getByTestId('details-modal-template-swap-value'),
    ).toHaveTextContent('0.04 BNB');
  });

  test('ensure not found token works correctly', () => {
    render(
      <DetailsModalScreen
        navigation={mockNavigation}
        route={detailsModalScreenEmptyRoute}
      />,
    );
    expect(
      screen.getByTestId('details-modal-template-total-amount'),
    ).toHaveTextContent('');
    expect(
      screen.getByTestId('details-modal-template-total-amount-dolars'),
    ).toHaveTextContent('');
  });

  test('ensure onGoback works correctly', () => {
    render(
      <DetailsModalScreen
        navigation={mockNavigation}
        route={detailsModalScreenRoute}
      />,
    );
    fireEvent.press(screen.getByTestId('details-modal-template'));
    expect(mockNavigation.goBack).toHaveBeenCalled();
  });
});
