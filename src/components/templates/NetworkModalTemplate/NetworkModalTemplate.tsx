import { BlurView } from '@react-native-community/blur';
import React from 'react';
import { View, Pressable, FlatList } from 'react-native';

import { Label } from '../../atoms';
import { Button } from '../../molecules';

import { NetworkItem } from './NetworkItem';
import { styles } from './NetworkModalTemplate.styles';

const networksListMock = [
  { name: 'Ropsten Test', color: '#EA3943' },
  { name: 'Kovan Test', color: '#45F0D1' },
  { name: 'Goerli Test', color: '#5F97FF' },
];

type NetworkModalTemplateProps = {
  onPressClose: () => void;
};

export const NetworkModalTemplate: React.FC<NetworkModalTemplateProps> = ({
  onPressClose,
}: NetworkModalTemplateProps) => {
  return (
    <Pressable style={styles.networkModalTemplate} onPress={onPressClose}>
      <BlurView style={styles.blur}>
        <View style={styles.indicator} />
      </BlurView>

      <View style={styles.networkContent}>
        <Label style={styles.networkModalLabel} value="Network" />

        <NetworkItem
          style={styles.selectedNetworkItem}
          networkName="Ethereum Main"
          networkColor="#FEBF32"
        />

        <View style={styles.networkListWrapper}>
          <Label style={styles.networkListLabel} value="Other Networks" />
          <FlatList
            style={styles.networkList}
            data={networksListMock}
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
    </Pressable>
  );
};
