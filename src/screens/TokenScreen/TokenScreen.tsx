import { useNavigation, useRoute } from '@react-navigation/native';
import React from 'react';

import { TokenTemplate } from '../../components/templates/TokenTemplate/TokenTemplate';
import { bnbSwapsHistory } from '../../mocks';
import { Token } from '../../types/token.type';

export const TokenScreen: React.FC = () => {
  const navigation = useNavigation();
  const routes = useRoute();

  const params = routes.params as { token: Token };
  const token = params.token;

  const calculatedTokenPrice = token.price * token.value;

  const onGoBack = () => navigation.goBack();

  const onSent = () => console.log('onSent');

  const onRecive = () => console.log('onRecive');

  return (
    <TokenTemplate
      tokenShortName={token.shortName}
      tokenValue={token.value}
      tokenPrice={calculatedTokenPrice}
      tokenSwapHistory={bnbSwapsHistory}
      onGoBack={onGoBack}
      onSent={onSent}
      onReceive={onRecive}
    />
  );
};
