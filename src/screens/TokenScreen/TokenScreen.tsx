import { useRoute } from '@react-navigation/native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import React from 'react';

import { TokenTemplate } from '../../components/templates/TokenTemplate/TokenTemplate';
import { bnbSwapsHistory } from '../../mocks';
import { Token } from '../../types/token.type';
import { Screens } from '../screens.enum';
import { StackList } from '../stackList.type';

type TokenScreenProps = NativeStackScreenProps<StackList, Screens.TOKEN>;

export const TokenScreen: React.FC<TokenScreenProps> = ({
  navigation,
}: TokenScreenProps) => {
  const routes = useRoute();
  const params = routes.params as { token: Token };
  const token = params.token;
  const calculatedTokenPrice = token.price * token.value;

  const onGoBack = () => navigation.goBack();

  const onSent = () => console.log('onSent');

  const onRecive = () => console.log('onRecive');

  const onHomeNavigate = () => navigation.navigate(Screens.HOME);

  const onSwapNavigate = () => navigation.navigate(Screens.SWAP);

  const onSettingsNavigate = () => navigation.navigate(Screens.SETTINGS);

  return (
    <TokenTemplate
      tokenShortName={token.shortName}
      tokenValue={token.value}
      tokenPrice={calculatedTokenPrice}
      tokenSwapHistory={bnbSwapsHistory}
      routeName={routes.name}
      onGoBack={onGoBack}
      onSent={onSent}
      onReceive={onRecive}
      onHomeNavigate={onHomeNavigate}
      onSwapNavigate={onSwapNavigate}
      onSettingsNavigate={onSettingsNavigate}
    />
  );
};
