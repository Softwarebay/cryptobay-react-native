import React from 'react';
import {
  FlatList,
  ListRenderItemInfo,
  TouchableOpacity,
  View,
  ViewStyle,
} from 'react-native';

import { Token } from '../../../types/token.type';
import { Label } from '../../atoms';

import { styles } from './TokenList.styles';
import { TokenListItem } from './TokenListItem';
import { TokenDetails } from './tokenDetails.type';
import { useSwitchTab } from './useSwitchTab';

type TokenListProps = {
  tokens: Token[];
  style?: ViewStyle | ViewStyle[];
  onTokenNavigate: (tokenDetails: TokenDetails) => void;
};

export const TokenList: React.FC<TokenListProps> = ({
  tokens,
  style,
  onTokenNavigate,
}: TokenListProps) => {
  const {
    Tabs,
    currentTab,
    handleSwitchTab,
    handleSwitchTabStyle,
    handleSwitchLabelStyles,
  } = useSwitchTab();

  const renderCurrentTab = {
    TOKEN: (
      <FlatList
        style={styles.list}
        data={tokens}
        testID="token-list"
        renderItem={({ item }: ListRenderItemInfo<Token>) => (
          <TokenListItem
            picture={item.picture}
            name={item.name}
            shortName={item.shortName}
            price={item.price}
            percentagePoint={item.percentagePoint}
            value={item.value}
            onTokenNavigate={onTokenNavigate}
          />
        )}
      />
    ),
    COLLECTIBILES: (
      <FlatList
        style={styles.list}
        data={['Collectibiles in Progress']}
        testID="collectibiles-list"
        renderItem={({ item }: ListRenderItemInfo<string>) => (
          <Label value={item} />
        )}
      />
    ),
  };

  return (
    <View style={[styles.container, style]}>
      <View style={styles.nav}>
        <TouchableOpacity
          style={[styles.navItem, handleSwitchTabStyle(Tabs.TOKEN)]}
          onPress={() => handleSwitchTab(Tabs.TOKEN)}
          testID="token-list-token-tab">
          <Label style={handleSwitchLabelStyles(Tabs.TOKEN)} value="Token" />
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.navItem, handleSwitchTabStyle(Tabs.COLLECTIBILES)]}
          onPress={() => handleSwitchTab(Tabs.COLLECTIBILES)}
          testID="token-list-collectibles-tab">
          <Label
            style={handleSwitchLabelStyles(Tabs.COLLECTIBILES)}
            value="Collectibles"
          />
        </TouchableOpacity>
      </View>

      {renderCurrentTab[currentTab]}
    </View>
  );
};
