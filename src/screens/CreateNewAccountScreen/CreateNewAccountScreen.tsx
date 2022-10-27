import { NativeStackScreenProps } from '@react-navigation/native-stack';
import React from 'react';
import { View, Text } from 'react-native';

import { Screens } from '../../screens.enum';
import { StackList } from '../../types/stackList.type';

type CreateNewAccountScreenProps = NativeStackScreenProps<
  StackList,
  Screens.CREATE_NEW_ACCOUNT
>;

export const CreateNewAccountScreen: React.FC<
  CreateNewAccountScreenProps
> = ({}: // navigation,
CreateNewAccountScreenProps) => {
  return (
    <View>
      <Text>Account</Text>
    </View>
  );
};
