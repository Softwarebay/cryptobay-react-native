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

type AuthorizedUserRootProps = NativeStackScreenProps<
  StackList,
  Screens.AUTHORIZED_USER_ROOT
>;

const AuthorizedUser = createNativeStackNavigator<StackList>();

export const AuthorizedUserRoot: React.FC<AuthorizedUserRootProps> = ({
  route,
  navigation,
}) => {
  const routeName = getFocusedRouteNameFromRoute(route) as string;

  const onHomeNavigate = () => navigation.navigate(Screens.HOME);

  const onSwapNavigate = () => navigation.navigate(Screens.SWAP);

  const onSettingsNavigate = () => navigation.navigate(Screens.SETTINGS);

  return (
    <>
      <AuthorizedUser.Navigator
        screenOptions={{
          headerShown: false,
        }}>
        <AuthorizedUser.Screen name={Screens.HOME} component={HomeScreen} />
        <AuthorizedUser.Screen name={Screens.TOKEN} component={TokenScreen} />
        <AuthorizedUser.Screen name={Screens.SWAP} component={SwapScreen} />
        <AuthorizedUser.Screen
          name={Screens.SETTINGS}
          component={SettingsScreen}
        />
      </AuthorizedUser.Navigator>
      <BottomNavigation
        routeName={routeName}
        onHomeNavigate={onHomeNavigate}
        onSwapNavigate={onSwapNavigate}
        onSettingsNavigate={onSettingsNavigate}
      />
    </>
  );
};
