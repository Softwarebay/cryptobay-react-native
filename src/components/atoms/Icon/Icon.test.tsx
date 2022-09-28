import { render, screen } from '@testing-library/react-native';
import React from 'react';
import '@testing-library/jest-native';
import renderer from 'react-test-renderer';

import 'react-native';
import { Icon } from './Icon';
import { Icons } from './icons.enum';

describe('Icon Atom', () => {
  test('Component Snapshot', () => {
    const iconTree = (icon: Icons) =>
      renderer.create(<Icon type={icon} />).toJSON();
    expect(iconTree(Icons.ARROW_DOWN)).toMatchSnapshot('Arrow Down Icon');
    expect(iconTree(Icons.ARROW_LEFT_BACK)).toMatchSnapshot(
      'Arrow Left Back Icon',
    );
    expect(iconTree(Icons.ARROW_RIGHT_RECIVED)).toMatchSnapshot(
      'Arrow Right Recived Icon',
    );
    expect(iconTree(Icons.ARROW_RIGHT_SENT)).toMatchSnapshot(
      'Arrow Right Sent Icon',
    );
    expect(iconTree(Icons.BUY)).toMatchSnapshot('Buy Icon');
    expect(iconTree(Icons.ELIPSE_PROFILE)).toMatchSnapshot(
      'Elipse Profile Icon',
    );
    expect(iconTree(Icons.SETTINGS)).toMatchSnapshot('Settings Icon');
    expect(iconTree(Icons.SWAP)).toMatchSnapshot('Swap Icon');
    expect(iconTree(Icons.WALLET)).toMatchSnapshot('Wallet Icon');
  });

  test('ensure good icon renders by type', () => {
    render(<Icon type={Icons.WALLET} />);
    const icon = (iconName: string) =>
      screen.queryByTestId(`svg-icon-${iconName}`);
    expect(icon('wallet')).not.toBeNull();
    expect(icon('wallet')).toHaveProp('width', 24);
    expect(icon('wallet')).toHaveProp('height', 24);
  });

  test('ensure bad icon shall not render', () => {
    render(<Icon type={'COFFE_CUP' as Icons} />);
    expect(screen.queryByTestId('svg-icon-coffe-cup')).toBeNull();
  });
});
