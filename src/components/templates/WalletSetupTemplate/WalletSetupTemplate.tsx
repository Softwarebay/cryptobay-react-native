import React from 'react';
import { SafeAreaView, View } from 'react-native';

import { SETUP } from '../../../../assets/pictures';
import { Header, Picture } from '../../atoms';
import { Button } from '../../molecules';

import { styles } from './WalletSetupTemplate.styles';

type WalletSetupTemplateProps = {
  onImportUsingSeedPhrase: () => void;
  onCreateANewWallet: () => void;
};

export const WalletSetupTemplate: React.FC<WalletSetupTemplateProps> = ({
  onImportUsingSeedPhrase,
  onCreateANewWallet,
}: WalletSetupTemplateProps) => {
  return (
    <SafeAreaView style={styles.walletSetupTempate}>
      <View style={styles.contentWrapper}>
        <Picture style={styles.picture} pictureFile={SETUP} />
        <Header style={styles.header} value="Wallet setup" />
        <Button
          style={styles.importButton}
          label="Import Using Seed Phrase"
          onPress={onImportUsingSeedPhrase}
        />
        <Button
          label="Create a New Wallet"
          variant="bright"
          onPress={onCreateANewWallet}
        />
      </View>
    </SafeAreaView>
  );
};
