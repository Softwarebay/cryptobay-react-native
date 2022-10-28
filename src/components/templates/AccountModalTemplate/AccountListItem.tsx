import React from 'react';
import { View } from 'react-native';

import { Account } from '../../../types/account.type';
import { Caption, Label, Picture } from '../../atoms';

import { styles } from './AccountListItem.styles';

export const AccountListItem: React.FC<Account> = ({
  profilePicture,
  accountName,
  tokenShortName,
  tokenValue,
}: Account) => {
  const tokenCaptionValue = `${tokenValue} ${tokenShortName}`;

  return (
    <View style={styles.accountListItem}>
      <Picture style={styles.profilePicture} pictureFile={profilePicture} />
      <View>
        <Label value={accountName} />
        <Caption value={tokenCaptionValue} />
      </View>
    </View>
  );
};
