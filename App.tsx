import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import Config from 'react-native-config';

import {
  HomeScreen,
  Screens,
  SettingsScreen,
  SwapScreen,
  WalletSetupScreen,
  WalthoughtScreen,
} from './src/screens';
import { StackList } from './src/screens/stackList.type';
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
        <Stack.Screen name={Screens.HOME} component={HomeScreen} />
        <Stack.Screen name={Screens.SWAP} component={SwapScreen} />
        <Stack.Screen name={Screens.SETTINGS} component={SettingsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Config.LOAD_STORYBOOK === 'true' ? StorybookUIRoot : App;
