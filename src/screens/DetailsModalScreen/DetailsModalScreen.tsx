import { useNavigation, useRoute } from '@react-navigation/native';
import React from 'react';

import { DetailsModalTemplate } from '../../components/templates/DetailsModalTemplate/DetailsModalTemplate';
import { tokensMock } from '../../mocks';
import { Swap } from '../../types/swap.type';
import { Token } from '../../types/token.type';

export const DetailsModalScreen: React.FC = () => {
  const navigation = useNavigation();
  const routes = useRoute();

  const params = routes.params as {
    swapDetails: Swap & { shortName: string };
  };
  const swapDetails = params.swapDetails;

  const onGoBack = () => navigation.goBack();

  const getTokenByShortName = () => {
    const token = tokensMock.find(
      (foundToken: Token) => foundToken.shortName === swapDetails.shortName,
    );

    if (token) {
      return token;
    }

    return {} as Token;
  };

  const tokenShortName = getTokenByShortName()?.shortName;
  const tokenValue = getTokenByShortName()?.value;
  const tokenPrice = getTokenByShortName()?.price;
  const tokenValueInDolars = tokenValue * tokenPrice;
  const calculatedNetworkFee = (swapDetails.value * 0.09).toFixed(2);

  const totalAmount = `${tokenValue} ${tokenShortName}`;
  const totalAmountDolarValue = `$${tokenValueInDolars}`;
  const swapValue = `${swapDetails.value} ${tokenShortName}`;
  const networkFee = `${calculatedNetworkFee} ${tokenShortName}`;

  return (
    <DetailsModalTemplate
      operation={swapDetails.operation}
      status={swapDetails.status}
      date={swapDetails.date}
      from={swapDetails.from}
      to={swapDetails.to}
      totalAmount={totalAmount}
      totalAmountDolarValue={totalAmountDolarValue}
      swapValue={swapValue}
      networkFee={networkFee}
      onGoBack={onGoBack}
    />
  );
};
