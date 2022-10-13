import React from 'react';
import { View, TouchableOpacity } from 'react-native';

import { Screens } from '../../../screens.enum';
import { Icon, Icons, Label } from '../../atoms';

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
  const walletScreens = [Screens.HOME, Screens.TOKEN];
  const swapScreens = [Screens.SWAP];
  const settingsScreens = [Screens.SETTINGS];

  const getCurrentScreenLabelStyle = (screensName: Screens[]) =>
    screensName.includes(routeName as Screens)
      ? styles.bottomNavigationItemCurrent
      : styles.bottomNavigationItemPrevious;

  return (
    <View style={styles.bottomNavigation}>
      <TouchableOpacity
        style={styles.bottomNavigationItem}
        onPress={onHomeNavigate}>
        <Icon
          type={Icons.WALLET}
          color={getCurrentScreenLabelStyle(walletScreens).color}
        />
        <Label
          style={getCurrentScreenLabelStyle(walletScreens)}
          value="Wallet"
          variant="tertiary"
          testID="bottom-navigation-wallet-tab-label"
        />
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.bottomNavigationItem}
        onPress={onSwapNavigate}>
        <Icon
          type={Icons.SWAP}
          color={getCurrentScreenLabelStyle(swapScreens).color}
        />
        <Label
          style={getCurrentScreenLabelStyle(swapScreens)}
          value="Swap"
          variant="tertiary"
          testID="bottom-navigation-swap-tab-label"
        />
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.bottomNavigationItem}
        onPress={onSettingsNavigate}>
        <Icon
          type={Icons.SETTINGS}
          color={getCurrentScreenLabelStyle(settingsScreens).color}
        />
        <Label
          style={getCurrentScreenLabelStyle(settingsScreens)}
          value="Settings"
          variant="tertiary"
          testID="bottom-navigation-settings-tab-label"
        />
      </TouchableOpacity>
    </View>
  );
};
