import { NativeStackScreenProps } from '@react-navigation/native-stack';
import React from 'react';

import { WalthoughtTemplate } from '../../components/templates/WalthoughtTemplate/WalthoughtTemplate';
import { Screens } from '../../screens.enum';
import { StackList } from '../../types/stackList.type';

type WalthoughtScreenProps = NativeStackScreenProps<
  StackList,
  Screens.WALTHOUGHT
>;

export const WalthoughtScreen: React.FC<WalthoughtScreenProps> = ({
  navigation,
}: WalthoughtScreenProps) => {
  const onCarouselSlidesEnd = () => {
    navigation.navigate(Screens.WALLET_SETUP);
  };

  return <WalthoughtTemplate onCarouselSlidesEnd={onCarouselSlidesEnd} />;
};
