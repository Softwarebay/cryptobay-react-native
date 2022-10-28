import React from 'react';
import { FlatList } from 'react-native-gesture-handler';

import { Account } from '../../../types/account.type';
import { Label } from '../../atoms';
import { Button } from '../../molecules';
import { ModalLayout } from '../../organisms/ModalLayout/ModalLayout';

import { AccountListItem } from './AccountListItem';
import { styles } from './AccountModalTemplate.styles';

type AccountModalTemplateProps = {
  accountList: Account[];
  onPressBack: () => void;
  onPressCreateNewAccount: () => void;
  onPressImportAccount: () => void;
};

export const AccountModalTemplate: React.FC<AccountModalTemplateProps> = ({
  accountList,
  onPressBack,
  onPressCreateNewAccount,
  onPressImportAccount,
}: AccountModalTemplateProps) => {
  return (
    <ModalLayout onPressModal={onPressBack}>
      <Label style={styles.accountModalLabel} value="Account" />

      <FlatList
        style={styles.accountList}
        data={accountList}
        renderItem={({ item }) => (
          <AccountListItem
            profilePicture={item.profilePicture}
            accountName={item.accountName}
            tokenShortName={item.tokenShortName}
            tokenValue={item.tokenValue}
          />
        )}
      />

      <Button
        label="Create New Account"
        variant="ghost"
        onPress={onPressCreateNewAccount}
      />
      <Button
        label="Import Account"
        variant="ghost"
        onPress={onPressImportAccount}
      />
    </ModalLayout>
  );
};
