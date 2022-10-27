import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import Config from 'react-native-config';

import {
  AuthorizedUserRoot,
  DetailsModalScreen,
  NetworkModalScreen,
  WalletSetupScreen,
  WalthoughtScreen,
} from './src/screens';
import { Screens } from './src/screens.enum';
import { StackList } from './src/types/stackList.type';
import StorybookUIRoot from './storybook';

const Stack = createNativeStackNavigator<StackList>();

const App: React.FC = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen name={Screens.WALTHOUGHT} component={WalthoughtScreen} />
        <Stack.Screen
          name={Screens.WALLET_SETUP}
          component={WalletSetupScreen}
        />
        <Stack.Screen
          name={Screens.AUTHORIZED_USER_ROOT}
          component={AuthorizedUserRoot}
        />
        <Stack.Screen
          name={Screens.DETAILS}
          options={{ presentation: 'transparentModal' }}
          component={DetailsModalScreen}
        />
        <Stack.Screen
          name={Screens.NETWORK}
          options={{ presentation: 'transparentModal' }}
          component={NetworkModalScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Config.LOAD_STORYBOOK === 'true' ? StorybookUIRoot : App;
