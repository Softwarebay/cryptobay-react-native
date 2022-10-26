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

  const onPressBack = () => navigation.goBack();

  const onPressSent = () => console.log('onPressSent');

  const onPressRecive = () => console.log('onPressRecive');

  const onPressDetails = (swapDetails: SwapDetails) =>
    navigation.navigate(Screens.DETAILS, { swapDetails: swapDetails } as any);

  return (
    <TokenTemplate
      tokenShortName={tokenDetails.shortName}
      tokenValue={tokenDetails.value}
      tokenPrice={calculatedTokenPrice}
      tokenSwapHistory={bnbSwapsHistory}
      onPressBack={onPressBack}
      onPressSent={onPressSent}
      onPressReceive={onPressRecive}
      onPressDetails={onPressDetails}
    />
  );
};
