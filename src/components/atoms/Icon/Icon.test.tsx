import { render, screen } from '@testing-library/react-native';
import React from 'react';
import '@testing-library/jest-native';
import renderer from 'react-test-renderer';

import 'react-native';
import { Icon } from './Icon';
import { Icons } from './icons.enum';

describe('Icon Atom', () => {
  test('Component Snapshot', () => {
    const walletIconTree = renderer
      .create(<Icon type={Icons.WALLET} />)
      .toJSON();
    expect(walletIconTree).toMatchSnapshot('Wallet Icon');
  });

  test('ensure good icon renders by type', () => {
    render(<Icon type={Icons.WALLET} />);
    const icon = (iconName: string) =>
      screen.queryByTestId(`svg-icon-${iconName}`);
    expect(icon('wallet')).not.toBeNull();
    expect(icon('wallet')).toHaveProp('width', 24);
    expect(icon('wallet')).toHaveProp('height', 24);
  });
});
