import { BlurView } from '@react-native-community/blur';
import React from 'react';
import { View, Pressable, FlatList } from 'react-native';

import { networkListMock } from '../../../mocks';
import { Label } from '../../atoms';
import { Button } from '../../molecules';

import { NetworkItem } from './NetworkItem';
import { styles } from './NetworkModalTemplate.styles';

type NetworkModalTemplateProps = {
  onPressClose: () => void;
};

export const NetworkModalTemplate: React.FC<NetworkModalTemplateProps> = ({
  onPressClose,
}: NetworkModalTemplateProps) => {
  return (
    <View style={styles.networkModalTemplate}>
      <BlurView style={styles.blur}>
        <Pressable style={styles.pressableBlur} onPress={onPressClose}>
          <View style={styles.indicator} />
        </Pressable>
      </BlurView>

      <View style={styles.networkContent}>
        <Label style={styles.networkModalLabel} value="Network" />

        <NetworkItem
          style={styles.selectedNetworkItem}
          networkName="Ethereum Main"
          networkColor="#FEBF32"
          variant="checked"
        />

        <View style={styles.networkListWrapper}>
          <Label style={styles.networkListLabel} value="Other Networks" />
          <FlatList
            style={styles.networkList}
            data={networkListMock}
            renderItem={({ item }) => (
              <NetworkItem
                style={styles.networkListItem}
                networkName={item.name}
                networkColor={item.color}
              />
            )}
          />
        </View>

        <Button
          style={styles.closeButton}
          label="Close"
          variant="ghost"
          onPress={onPressClose}
        />
      </View>
    </View>
  );
};
