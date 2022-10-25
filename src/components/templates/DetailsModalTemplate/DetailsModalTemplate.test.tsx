import { fireEvent, render, screen } from '@testing-library/react-native';
import React from 'react';
import '@testing-library/jest-native';
import 'react-native';
import renderer from 'react-test-renderer';

import { DetailsModalTemplate } from './DetailsModalTemplate';

const mockOnPressBack = jest.fn();

describe('DetailsModalTemplate Template', () => {
  test('Component Snapshot', () => {
    const tree = renderer
      .create(
        <DetailsModalTemplate
          operation="Recived BNB"
          status="Confirmed"
          date="Mar 3 at 10:04am"
          from="0x3Dc6...DfCE"
          to="0x3Dc6...DfF9"
          totalAmount="2.56 BNB"
          totalAmountDolarValue="$594.304"
          swapValue="2.35 BNB"
          networkFee="0.21 BNB"
          onPressBack={mockOnPressBack}
        />,
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  test('ensure badge color gears correctly', () => {
    const { rerender } = render(
      <DetailsModalTemplate
        operation="Recived BNB"
        status="Confirmed"
        date="Mar 3 at 10:04am"
        from="0x3Dc6...DfCE"
        to="0x3Dc6...DfF9"
        totalAmount="2.56 BNB"
        totalAmountDolarValue="$594.304"
        swapValue="2.35 BNB"
        networkFee="0.21 BNB"
        onPressBack={mockOnPressBack}
      />,
    );
    const statusBadge = screen.getByTestId('details-modal-status-badge');
    expect(statusBadge).toHaveStyle({
      color: '#76E268',
    });
    rerender(
      <DetailsModalTemplate
        operation="Recived BNB"
        status="Cancelled"
        date="Mar 3 at 10:04am"
        from="0x3Dc6...DfCE"
        to="0x3Dc6...DfF9"
        totalAmount="2.56 BNB"
        totalAmountDolarValue="$594.304"
        swapValue="2.35 BNB"
        networkFee="0.21 BNB"
        onPressBack={mockOnPressBack}
      />,
    );
    expect(statusBadge).toHaveStyle({
      color: '#EA3943',
    });
  });

  test('ensure onPressGoBack works correctly', () => {
    render(
      <DetailsModalTemplate
        operation="Recived BNB"
        status="Confirmed"
        date="Mar 3 at 10:04am"
        from="0x3Dc6...DfCE"
        to="0x3Dc6...DfF9"
        totalAmount="2.56 BNB"
        totalAmountDolarValue="$594.304"
        swapValue="2.35 BNB"
        networkFee="0.21 BNB"
        onPressBack={mockOnPressBack}
      />,
    );
    fireEvent.press(screen.getByTestId('details-modal-template'));
    expect(mockOnPressBack).toHaveBeenCalled();
  });
});
