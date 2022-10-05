import { useRoute } from '@react-navigation/native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import React from 'react';

import { PROFILE } from '../../../assets/pictures';
import { HomeTemplate } from '../../components/templates';
import { etheriumTockenMock, tokensMock } from '../../mocks';
import { Screens } from '../screens.enum';
import { StackList } from '../stackList.type';

type HomeScreenProps = NativeStackScreenProps<StackList, Screens.HOME>;

export const HomeScreen: React.FC<HomeScreenProps> = ({
  navigation,
}: HomeScreenProps) => {
  const route = useRoute();

  const onDropDown = () => console.log('onDropDown');

  const onSent = () => console.log('onSent');

  const onRecive = () => console.log('onRecive');

  const onBuy = () => console.log('onBuy');

  const onAddToken = () => console.log('onAddToken');

  const onHomeNavigate = () => navigation.navigate(Screens.HOME);

  const onSwapNavigate = () => navigation.navigate(Screens.SWAP);

  const onSettingsNavigate = () => navigation.navigate(Screens.SETTINGS);

  return (
    <HomeTemplate
      profileAvatarPicture={PROFILE}
      currencyName={etheriumTockenMock.name}
      currencyShortName={etheriumTockenMock.shortName}
      currencyPrice={etheriumTockenMock.price}
      currencyPercentagePoint={etheriumTockenMock.percentagePoint}
      currencyValue={etheriumTockenMock.value}
      tokens={tokensMock}
      routeName={route.name}
      onDropDown={onDropDown}
      onSent={onSent}
      onRecive={onRecive}
      onBuy={onBuy}
      onAddToken={onAddToken}
      onHomeNavigate={onHomeNavigate}
      onSwapNavigate={onSwapNavigate}
      onSettingsNavigate={onSettingsNavigate}
    />
  );
};
