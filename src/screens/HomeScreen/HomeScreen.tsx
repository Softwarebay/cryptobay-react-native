import { NativeStackScreenProps } from '@react-navigation/native-stack';
import React from 'react';

import { TokenDetails } from '../../components/organisms';
import { HomeTemplate } from '../../components/templates';
import { etheriumTokenMock, tokensMock } from '../../mocks';
import { Screens } from '../../screens.enum';
import { StackList } from '../../types/stackList.type';

type HomeScreenProps = NativeStackScreenProps<StackList, Screens.HOME>;

export const HomeScreen: React.FC<HomeScreenProps> = ({
  navigation,
}: HomeScreenProps) => {
  const accountScreen = { screen: Screens.ACCOUNT } as any;

  const onPressAvatar = () =>
    navigation.navigate(Screens.ACCOUNT_ROOT, accountScreen);

  const onPressDropDown = () => navigation.navigate(Screens.NETWORK);

  const onPressSent = () => console.log('onPressSent');

  const onPressRecive = () => console.log('onPressRecive');

  const onPressBuy = () => console.log('onPressBuy');

  const onPressAddToken = () => console.log('onPressAddToken');

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
      onPressAvatar={onPressAvatar}
      onPressDropDown={onPressDropDown}
      onPressSent={onPressSent}
      onPressRecive={onPressRecive}
      onPressBuy={onPressBuy}
      onPressAddToken={onPressAddToken}
      onPressToken={onPressToken}
    />
  );
};
