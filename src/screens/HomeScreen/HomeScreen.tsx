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
  const onPressDropDown = () => console.log('onPressDropDown');

  const onPressSent = () => console.log('onPressSent');

  const onPressRecive = () => console.log('onPressRecive');

  const onPressBuy = () => console.log('onPressBuy');

  const onPressAddToken = () => console.log('onPressAddToken');

  const onHomeNavigate = () => navigation.navigate(Screens.HOME);

  const onSwapNavigate = () => navigation.navigate(Screens.SWAP);

  const onSettingsNavigate = () => navigation.navigate(Screens.SETTINGS);

  const onPressToken = (tokenDetails: TokenDetails) =>
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
      onPressDropDown={onPressDropDown}
      onPressSent={onPressSent}
      onPressRecive={onPressRecive}
      onPressBuy={onPressBuy}
      onPressAddToken={onPressAddToken}
      onHomeNavigate={onHomeNavigate}
      onSwapNavigate={onSwapNavigate}
      onSettingsNavigate={onSettingsNavigate}
      onPressToken={onPressToken}
    />
  );
};
