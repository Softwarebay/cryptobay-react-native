import { NativeStackScreenProps } from '@react-navigation/native-stack';
import React from 'react';
import { View, Text } from 'react-native';

import { Screens } from '../../screens.enum';
import { StackList } from '../../types/stackList.type';

type AccountModalScreenProps = NativeStackScreenProps<
  StackList,
  Screens.ACCOUNT
>;

export const AccountModalScreen: React.FC<
  AccountModalScreenProps
> = ({}: // navigation,
AccountModalScreenProps) => {
  return (
    <View>
      <Text>AccountModal</Text>
    </View>
  );
};
