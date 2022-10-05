import { useNavigation } from '@react-navigation/native';
import React from 'react';

import { WalletSetupTemplate } from '../../components/templates';
import { Screens } from '../../screens.enum';

export const WalletSetupScreen: React.FC = () => {
  const navigation = useNavigation();

  const onImportUsingSeedPhrase = () =>
    navigation.navigate(Screens.HOME as never);

  const onCreateANewWallet = () => navigation.navigate(Screens.HOME as never);

  return (
    <WalletSetupTemplate
      onImportUsingSeedPhrase={onImportUsingSeedPhrase}
      onCreateANewWallet={onCreateANewWallet}
    />
  );
};
