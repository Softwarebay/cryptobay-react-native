import { NativeStackScreenProps } from '@react-navigation/native-stack';
import React from 'react';

import { NetworkModalTemplate } from '../../components/templates';
import { Screens } from '../../screens.enum';
import { StackList } from '../../types/stackList.type';

type NetworkScreenProps = NativeStackScreenProps<StackList, Screens.NETWORK>;

export const NetworkModalScreen: React.FC<NetworkScreenProps> = ({
  navigation,
}: NetworkScreenProps) => {
  const onPressClose = () => navigation.goBack();

  return <NetworkModalTemplate onPressClose={onPressClose} />;
};
