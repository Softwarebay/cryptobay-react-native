import { NativeStackScreenProps } from '@react-navigation/native-stack';
import React from 'react';

import { SwapDetails } from '../../components/organisms';
import { DetailsModalTemplate } from '../../components/templates';
import { tokensMock } from '../../mocks';
import { Screens } from '../../screens.enum';
import { StackList } from '../../types/stackList.type';
import { Token } from '../../types/token.type';

type DetailsModalScreenProps = NativeStackScreenProps<
  StackList,
  Screens.DETAILS
>;

export const DetailsModalScreen: React.FC<DetailsModalScreenProps> = ({
  route,
  navigation,
}: DetailsModalScreenProps) => {
  const { swapDetails } = route.params! as {
    swapDetails: SwapDetails;
  };

  const getTokenByShortName = () =>
    tokensMock.find(
      (foundToken: Token) => foundToken.shortName === swapDetails.shortName,
    ) || ({} as Token);

  const tokenShortName =
    getTokenByShortName() && getTokenByShortName().shortName;
  const tokenValue = getTokenByShortName() && getTokenByShortName().value;
  const tokenPrice = getTokenByShortName() && getTokenByShortName().price;

  const tokenValueInDolars = tokenValue * tokenPrice;
  const calculatedNetworkFee = (swapDetails.value * 0.09).toFixed(2);
  const totalAmount = `${tokenValue} ${tokenShortName}`;
  const totalAmountDolarValue = `$${tokenValueInDolars}`;
  const swapValue = `${swapDetails.value} ${tokenShortName}`;
  const networkFee = `${calculatedNetworkFee} ${tokenShortName}`;

  const onPressBack = () => navigation.goBack();

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
      onPressBack={onPressBack}
    />
  );
};
