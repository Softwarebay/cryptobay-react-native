import React from 'react';
import { View, ViewStyle } from 'react-native';

import {
  ArrowIcon,
  BuyIcon,
  CheckIcon,
  ElipseProfileIcon,
  PlusIcon,
  SettingsIcon,
  SwapIcon,
  TickArrowIcon,
  WalletIcon,
} from './icons';
import { Icons } from './icons.enum';

type IconProps = {
  type: Icons;
  width?: number;
  height?: number;
  color?: string;
  style?: ViewStyle | ViewStyle[] | false;
  testID?: string;
};

export const Icon: React.FC<IconProps> = ({
  type,
  width = 24,
  height = 24,
  color,
  style,
  testID,
}: IconProps) => {
  const iconVariants = {
    ARROW: (
      <ArrowIcon
        width={width}
        height={height}
        color={color}
        testID="svg-icon-arrow"
      />
    ),
    BUY: <BuyIcon width={width} height={height} testID="svg-icon-buy" />,
    CHECK: <CheckIcon width={width} height={height} testID="svg-icon-check" />,
    ELIPSE_PROFILE: (
      <ElipseProfileIcon
        width={width}
        height={height}
        testID="svg-icon-elipse-profile"
      />
    ),
    PLUS: <PlusIcon width={width} height={height} testID="svg-icon-plus" />,
    SETTINGS: (
      <SettingsIcon
        width={width}
        height={height}
        color={color}
        testID="svg-icon-settings"
      />
    ),
    SWAP: (
      <SwapIcon
        width={width}
        height={height}
        color={color}
        testID="svg-icon-swap"
      />
    ),
    TICK_ARROW: (
      <TickArrowIcon
        width={width}
        height={height}
        testID="svg-icon-tick-arrow"
      />
    ),
    WALLET: (
      <WalletIcon
        width={width}
        height={height}
        color={color}
        testID="svg-icon-wallet"
      />
    ),
  };

  return (
    <View testID={testID} style={style}>
      {iconVariants[type]}
    </View>
  );
};
