import { useNavigation, useRoute } from '@react-navigation/native';
import React from 'react';
import { View, TouchableOpacity } from 'react-native';

import { Screens } from '../../../screens.enum';
import { Icon, Icons, Label } from '../../atoms';

import { styles } from './BottomNavigation.styles';

export const BottomNavigation: React.FC = () => {
  const navigation = useNavigation();
  const route = useRoute();

  const walletScreens = [Screens.HOME, Screens.TOKEN];
  const swapScreens = [Screens.SWAP];
  const settingsScreens = [Screens.SETTINGS];

  const onHomeNavigate = () => navigation.navigate(Screens.HOME as never);
  const onSwapNavigate = () => navigation.navigate(Screens.SWAP as never);
  const onSettingsNavigate = () =>
    navigation.navigate(Screens.SETTINGS as never);

  const getCurrentScreenLabelStyle = (screensName: Screens[]) =>
    screensName.includes(route.name as Screens)
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
        />
      </TouchableOpacity>
    </View>
  );
};
