import { NativeStackScreenProps } from '@react-navigation/native-stack';
import React from 'react';
import { View, Text } from 'react-native';

import { Screens } from '../../screens.enum';
import { StackList } from '../../types/stackList.type';

type AccountScreenProps = NativeStackScreenProps<StackList, Screens.ACCOUNT>;

export const AccountScreen: React.FC<AccountScreenProps> = ({}: // navigation,
AccountScreenProps) => {
  return (
    <View>
      <Text>Account</Text>
    </View>
  );
};
