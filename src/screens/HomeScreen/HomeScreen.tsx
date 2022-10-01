import { NativeStackScreenProps } from '@react-navigation/native-stack';
import React from 'react';
import { SafeAreaView, Text } from 'react-native';

import { Screens } from '../screens.enum';
import { StackList } from '../stackList.type';

type HomeScreenProps = NativeStackScreenProps<StackList, Screens.HOME>;

export const HomeScreen: React.FC<HomeScreenProps> = (/* {
  navigaition,
}: HomeScreenProps */) => {
  return (
    <SafeAreaView>
      <Text>HomeScreen</Text>
    </SafeAreaView>
  );
};
