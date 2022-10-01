import { NativeStackScreenProps } from '@react-navigation/native-stack';
import React from 'react';

import { WalthoughtTemplate } from '../../components/templates/WalthoughtTemplate/WalthoughtTemplate';
import { Screens } from '../screens.enum';
import { StackList } from '../stackList.type';

type WalthoughtScreenProps = NativeStackScreenProps<StackList, Screens>;

export const WalthoughtScreen: React.FC<WalthoughtScreenProps> = ({
  navigation,
}: WalthoughtScreenProps) => {
  const onSetapNavigate = () => {
    // Temporary navigate to HomeScreen
    navigation.navigate(Screens.HOME);
  };

  return <WalthoughtTemplate onNavigate={onSetapNavigate} />;
};
