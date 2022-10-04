import { useRoute } from '@react-navigation/native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import React from 'react';

import { PROFILE } from '../../../assets/pictures';
import { HomeTemplate } from '../../components/templates';
import { tokenMock, tokensMock } from '../../mocks';
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
      currencyName={tokenMock.name}
      currencyShortName={tokenMock.shortName}
      currencyPrice={tokenMock.price}
      currencyPercentagePoint={tokenMock.percentagePoint}
      currencyValue={tokenMock.value}
      tokens={tokensMock}
      onDropDown={onDropDown}
      onSent={onSent}
      onRecive={onRecive}
      onBuy={onBuy}
      onAddToken={onAddToken}
      onHomeNavigate={onHomeNavigate}
      onSwapNavigate={onSwapNavigate}
      onSettingsNavigate={onSettingsNavigate}
      routeName={route.name}
    />
  );
};
