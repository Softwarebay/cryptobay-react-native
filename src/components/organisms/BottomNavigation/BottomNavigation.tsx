import React from 'react';
import { View, TouchableOpacity } from 'react-native';

import { Screens } from '../../../screens';
import { Label } from '../../atoms';
import { Icon } from '../../atoms/Icon/Icon';
import { Icons } from '../../atoms/Icon/icons.enum';

import { styles } from './BottomNavigation.styles';

type BottomNavigationProps = {
  routeName: string;
  onHomeNavigate: () => void;
  onSwapNavigate: () => void;
  onSettingsNavigate: () => void;
};

export const BottomNavigation: React.FC<BottomNavigationProps> = ({
  routeName,
  onHomeNavigate,
  onSwapNavigate,
  onSettingsNavigate,
}: BottomNavigationProps) => {
  const getCurrentScreenLabelStyle = (screenName: Screens) =>
    screenName === routeName
      ? styles.bottomNavigationItemCurrent
      : styles.bottomNavigationItemPrevious;

  return (
    <View style={styles.bottomNavigation}>
      <TouchableOpacity
        style={styles.bottomNavigationItem}
        onPress={onHomeNavigate}>
        <Icon
          type={Icons.WALLET}
          color={getCurrentScreenLabelStyle(Screens.HOME).color}
        />
        <Label
          style={getCurrentScreenLabelStyle(Screens.HOME)}
          value="Wallet"
          variant="tertiary"
        />
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.bottomNavigationItem}
        onPress={onSwapNavigate}>
        <Icon
          type={Icons.SWAP}
          color={getCurrentScreenLabelStyle(Screens.SWAP).color}
        />
        <Label
          style={getCurrentScreenLabelStyle(Screens.SWAP)}
          value="Swap"
          variant="tertiary"
        />
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.bottomNavigationItem}
        onPress={onSettingsNavigate}>
        <Icon
          type={Icons.SETTINGS}
          color={getCurrentScreenLabelStyle(Screens.SETTINGS).color}
        />
        <Label
          style={getCurrentScreenLabelStyle(Screens.SETTINGS)}
          value="Settings"
          variant="tertiary"
        />
      </TouchableOpacity>
    </View>
  );
};
