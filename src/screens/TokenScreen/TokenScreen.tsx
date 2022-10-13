import { NativeStackScreenProps } from '@react-navigation/native-stack';
import React from 'react';

import { SwapDetails, TokenDetails } from '../../components/organisms';
import { TokenTemplate } from '../../components/templates';
import { bnbSwapsHistory } from '../../mocks';
import { Screens } from '../../screens.enum';
import { StackList } from '../../types/stackList.type';

type TokenScreenProps = NativeStackScreenProps<StackList, Screens.TOKEN>;

export const TokenScreen: React.FC<TokenScreenProps> = ({
  route,
  navigation,
}: TokenScreenProps) => {
  const { tokenDetails } = route.params! as { tokenDetails: TokenDetails };

  const calculatedTokenPrice = tokenDetails.price * tokenDetails.value;

  const onGoBack = () => navigation.goBack();

  const onSent = () => console.log('onSent');

  const onRecive = () => console.log('onRecive');

  const onHomeNavigate = () => navigation.navigate(Screens.HOME);

  const onSwapNavigate = () => navigation.navigate(Screens.SWAP);

  const onSettingsNavigate = () => navigation.navigate(Screens.SETTINGS);

  const onDetailsNavigate = (swapDetails: SwapDetails) =>
    navigation.navigate(Screens.DETAILS, { swapDetails: swapDetails } as any);

  return (
    <TokenTemplate
      tokenShortName={tokenDetails.shortName}
      tokenValue={tokenDetails.value}
      tokenPrice={calculatedTokenPrice}
      tokenPercentagePoint={tokenDetails.percentagePoint}
      tokenSwapHistory={bnbSwapsHistory}
      routeName={route.name}
      onGoBack={onGoBack}
      onSent={onSent}
      onReceive={onRecive}
      onHomeNavigate={onHomeNavigate}
      onSwapNavigate={onSwapNavigate}
      onSettingsNavigate={onSettingsNavigate}
      onDetailsNavigate={onDetailsNavigate}
    />
  );
};
