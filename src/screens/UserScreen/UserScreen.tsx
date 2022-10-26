import { getFocusedRouteNameFromRoute } from '@react-navigation/native';
import {
  createNativeStackNavigator,
  NativeStackScreenProps,
} from '@react-navigation/native-stack';
import React from 'react';

import { BottomNavigation } from '../../components/organisms';
import { Screens } from '../../screens.enum';
import { StackList } from '../../types/stackList.type';
import { HomeScreen } from '../HomeScreen/HomeScreen';
import { SettingsScreen } from '../SettingsScreen/SettingsScreen';
import { SwapScreen } from '../SwapScreen/SwapScreen';
import { TokenScreen } from '../TokenScreen/TokenScreen';

type UserScreenProps = NativeStackScreenProps<StackList, Screens.USER>;

const User = createNativeStackNavigator<StackList>();

export const UserScreen: React.FC<UserScreenProps> = ({
  route,
  navigation,
}) => {
  const routeName = getFocusedRouteNameFromRoute(route) as string;

  const onHomeNavigate = () => navigation.navigate(Screens.HOME);

  const onSwapNavigate = () => navigation.navigate(Screens.SWAP);

  const onSettingsNavigate = () => navigation.navigate(Screens.SETTINGS);

  return (
    <>
      <User.Navigator
        screenOptions={{
          headerShown: false,
        }}>
        <User.Screen name={Screens.HOME} component={HomeScreen} />
        <User.Screen name={Screens.TOKEN} component={TokenScreen} />
        <User.Screen name={Screens.SWAP} component={SwapScreen} />
        <User.Screen name={Screens.SETTINGS} component={SettingsScreen} />
      </User.Navigator>
      <BottomNavigation
        routeName={routeName}
        onHomeNavigate={onHomeNavigate}
        onSwapNavigate={onSwapNavigate}
        onSettingsNavigate={onSettingsNavigate}
      />
    </>
  );
};
