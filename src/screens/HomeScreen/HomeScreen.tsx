import { NativeStackScreenProps } from '@react-navigation/native-stack';
import React from 'react';

import { TokenDetails } from '../../components/organisms';
import { HomeTemplate } from '../../components/templates';
import { etheriumTokenMock, tokensMock } from '../../mocks';
import { Screens } from '../../screens.enum';
import { StackList } from '../../types/stackList.type';

type HomeScreenProps = NativeStackScreenProps<StackList, Screens.HOME>;

export const HomeScreen: React.FC<HomeScreenProps> = ({
  route,
  navigation,
}: HomeScreenProps) => {
  const onDropDown = () => console.log('onDropDown');

  const onSent = () => console.log('onSent');

  const onRecive = () => console.log('onRecive');

  const onBuy = () => console.log('onBuy');

  const onAddToken = () => console.log('onAddToken');

  const onHomeNavigate = () => navigation.navigate(Screens.HOME);

  const onSwapNavigate = () => navigation.navigate(Screens.SWAP);

  const onSettingsNavigate = () => navigation.navigate(Screens.SETTINGS);

  const onTokenNavigate = (tokenDetails: TokenDetails) =>
    navigation.navigate(Screens.TOKEN, { tokenDetails: tokenDetails } as any);

  return (
    <HomeTemplate
      tokenName={etheriumTokenMock.name}
      tokenShortName={etheriumTokenMock.shortName}
      tokenPrice={etheriumTokenMock.price}
      tokenPercentagePoint={etheriumTokenMock.percentagePoint}
      tokenValue={etheriumTokenMock.value}
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
      onTokenNavigate={onTokenNavigate}
    />
  );
};
