import { useNavigation } from '@react-navigation/native';
import React from 'react';

import { WalthoughtTemplate } from '../../components/templates/WalthoughtTemplate/WalthoughtTemplate';
import { Screens } from '../../screens.enum';

export const WalthoughtScreen: React.FC = () => {
  const navigation = useNavigation();

  const onSetapNavigate = () => {
    navigation.navigate(Screens.WALLET_SETUP as never);
  };

  return <WalthoughtTemplate onNavigate={onSetapNavigate} />;
};
