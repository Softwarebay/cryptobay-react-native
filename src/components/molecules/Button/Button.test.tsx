import { fireEvent, render, screen } from '@testing-library/react-native';
import React from 'react';
import '@testing-library/jest-native';
import renderer from 'react-test-renderer';

import 'react-native';
import { Icons } from '../../atoms/Icon/icons.enum';

import { Button } from './Button';

const mockOnPress = jest.fn();

describe('Button Molecule', () => {
  test('Component Snapshot', () => {
    const noIconButtonTree = renderer
      .create(<Button label="Get Start" onPress={mockOnPress} />)
      .toJSON();
    const withIconButtonTree = renderer
      .create(<Button label="Buy" onPress={mockOnPress} iconType={Icons.BUY} />)
      .toJSON();
    expect(noIconButtonTree).toMatchSnapshot('No Icon');
    expect(withIconButtonTree).toMatchSnapshot('With Icon');
  });

  test('ensure button variants works correctly', () => {
    const { rerender } = render(
      <Button
        testID="molecule-button"
        label="Get Start"
        onPress={mockOnPress}
      />,
    );
    const button = screen.getByTestId('molecule-button');
    expect(button).toHaveStyle({
      backgroundColor: '#2A2D3C',
      color: '#FEBF32',
    });
    rerender(
      <Button
        testID="molecule-button"
        label="Create a New Wallet"
        onPress={mockOnPress}
        variant="bright"
      />,
    );
    expect(button).toHaveStyle({
      backgroundColor: '#FEBF32',
      color: '#000000',
    });
  });

  test('ensure onPress works correctly', () => {
    render(
      <Button
        testID="molecule-button"
        label="Get Start"
        onPress={mockOnPress}
      />,
    );
    fireEvent.press(screen.getByTestId('molecule-button'));
    expect(mockOnPress).toHaveBeenCalled();
  });

  test('ensure icon renders correctly', () => {
    const iconStyle = { marginRight: 8 };
    const { rerender } = render(
      <Button
        testID="molecule-button"
        label="Get Start"
        onPress={mockOnPress}
      />,
    );
    expect(screen.getByTestId('molecule-button')).toHaveTextContent(
      'Get Start',
    );
    expect(screen.queryByTestId('svg-icon-wallet')).toBeNull();
    rerender(
      <Button
        testID="molecule-button"
        label={'Buy'}
        onPress={mockOnPress}
        iconType={Icons.BUY}
        iconStyle={iconStyle}
        iconTestID="button-icon"
      />,
    );
    expect(screen.getByTestId('molecule-button')).toHaveTextContent('Buy');
    expect(screen.queryByTestId('svg-icon-buy')).not.toBeNull();
    expect(screen.getByTestId('button-icon')).toHaveStyle({
      marginRight: 8,
    });
  });
});
