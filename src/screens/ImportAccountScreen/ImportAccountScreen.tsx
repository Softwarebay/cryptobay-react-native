import { NativeStackScreenProps } from '@react-navigation/native-stack';
import React from 'react';
import { View, Text } from 'react-native';

import { Screens } from '../../screens.enum';
import { StackList } from '../../types/stackList.type';

type ImportAccountScreenProps = NativeStackScreenProps<
  StackList,
  Screens.IMPORT_ACCOUNT
>;

export const ImportAccountScreen: React.FC<
  ImportAccountScreenProps
> = ({}: // navigation,
ImportAccountScreenProps) => {
  return (
    <View>
      <Text>Account</Text>
    </View>
  );
};
