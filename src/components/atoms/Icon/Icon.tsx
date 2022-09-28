import React from 'react';

import ArrowDownIcon from '../../../../assets/icons/arrow-down.svg';
import ArrowLeftBackIcon from '../../../../assets/icons/arrow-left-back.svg';
import ArrowRightRecivedIcon from '../../../../assets/icons/arrow-right-recived.svg';
import ArrowRightSentIcon from '../../../../assets/icons/arrow-right-sent.svg';
import BuyIcon from '../../../../assets/icons/buy.svg';
import SettingsIcon from '../../../../assets/icons/settings.svg';
import SwapIcon from '../../../../assets/icons/swap.svg';
import WalletIcon from '../../../../assets/icons/wallet.svg';

import { Icons } from './icons.enum';

type IconProps = {
  type: Icons;
  width?: number;
  height?: number;
};

export const Icon: React.FC<IconProps> = ({
  type,
  width = 24,
  height = 24,
}: IconProps) => {
  const iconVariants = {
    ARROW_DOWN: (
      <ArrowDownIcon
        width={width}
        height={height}
        testID="svg-icon-arrow-down"
      />
    ),
    ARROW_LEFT_BACK: (
      <ArrowLeftBackIcon
        width={width}
        height={height}
        testID="svg-icon-arrow-left-back"
      />
    ),
    ARROW_RIGHT_RECIVED: (
      <ArrowRightRecivedIcon
        width={width}
        height={height}
        testID="svg-icon-arrow-right-recive"
      />
    ),
    ARROW_RIGHT_SENT: (
      <ArrowRightSentIcon
        width={width}
        height={height}
        testID="svg-icon-arrow-right-sent"
      />
    ),
    BUY: <BuyIcon width={width} height={height} testID="svg-icon-buy" />,
    SETTINGS: (
      <SettingsIcon width={width} height={height} testID="svg-icon-settings" />
    ),
    SWAP: <SwapIcon width={width} height={height} testID="svg-icon-swap" />,
    WALLET: (
      <WalletIcon width={width} height={height} testID="svg-icon-wallet" />
    ),
  };

  return iconVariants[type];
};
