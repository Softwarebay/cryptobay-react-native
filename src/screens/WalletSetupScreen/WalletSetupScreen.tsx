import { NativeStackScreenProps } from '@react-navigation/native-stack';
import React from 'react';

import { WalletSetupTemplate } from '../../components/templates';
import { Screens } from '../../screens.enum';
import { StackList } from '../../types/stackList.type';

type WalletSetupScreenProps = NativeStackScreenProps<
  StackList,
  Screens.WALLET_SETUP
>;

export const WalletSetupScreen: React.FC<WalletSetupScreenProps> = ({
  navigation,
}: WalletSetupScreenProps) => {
  const onImportUsingSeedPhrase = () =>
    navigation.navigate(Screens.USER, { screen: Screens.HOME } as any);

  const onCreateANewWallet = () =>
    navigation.navigate(Screens.USER, { screen: Screens.HOME } as any);

  return (
    <WalletSetupTemplate
      onImportUsingSeedPhrase={onImportUsingSeedPhrase}
      onCreateANewWallet={onCreateANewWallet}
    />
  );
};
