import { NativeStackScreenProps } from '@react-navigation/native-stack';
import React from 'react';

import { PROFILE } from '../../../assets/pictures';
import { HomeTemplate } from '../../components/templates';
import { Token } from '../../types/token.type';
import { Screens } from '../screens.enum';
import { StackList } from '../stackList.type';

const tockenMock = {
  name: 'Etherium',
  shortName: 'ETH',
  price: 16858.15,
  percentagePoint: 0.7,
  value: 9.2362,
} as Token;

const tockensMock = [
  {
    picture: 0,
    name: 'Binance Coin',
    shortName: 'BNB',
    price: 226.69,
    percentagePoint: 2,
    value: 19.2371,
  },
  {
    picture: 0,
    name: 'USD Coin',
    shortName: 'USDC',
    price: 1.0,
    percentagePoint: 4.3,
    value: 92.3,
  },
  {
    picture: 0,
    name: 'Synthetix',
    shortName: 'SNX',
    price: 20.83,
    percentagePoint: -1.3,
    value: 42.74,
  },
] as Token[];

type HomeScreenProps = NativeStackScreenProps<StackList, Screens.HOME>;

export const HomeScreen: React.FC<HomeScreenProps> = ({
  navigation,
}: HomeScreenProps) => {
  const onDropDown = () => console.log('onDropDown');

  const onSent = () => console.log('onSent');

  const onRecive = () => console.log('onRecive');

  const onBuy = () => console.log('onBuy');

  const onAddToken = () => console.log('onAddToken');

  const onHomeNavigate = () => navigation.navigate(Screens.HOME);

  const onSwapNavigate = () => console.log('onSwapNavigate');

  const onSettingsNavigate = () => console.log('onSettingsNavigate');

  return (
    <HomeTemplate
      profileAvatarPicture={PROFILE}
      currencyName={tockenMock.name}
      currencyShortName={tockenMock.shortName}
      currencyPrice={tockenMock.price}
      currencyPercentagePoint={tockenMock.percentagePoint}
      currencyValue={tockenMock.value}
      tokens={tockensMock}
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
