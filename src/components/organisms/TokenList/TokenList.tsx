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
  onPressToken: (tokenDetails: TokenDetails) => void;
};

export const TokenList: React.FC<TokenListProps> = ({
  tokens,
  style,
  onPressToken,
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
        testID="token-list"
        style={styles.list}
        data={tokens}
        renderItem={({ item }: ListRenderItemInfo<Token>) => (
          <TokenListItem
            testID={`token-list-item-${item.shortName}`}
            picture={item.picture}
            name={item.name}
            shortName={item.shortName}
            price={item.price}
            percentagePoint={item.percentagePoint}
            value={item.value}
            onPressToken={onPressToken}
          />
        )}
      />
    ),
    COLLECTIBILES: (
      <FlatList
        testID="collectibiles-list"
        style={styles.list}
        data={['Collectibiles in Progress']}
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
          testID="token-list-token-tab"
          style={[styles.navItem, handleSwitchTabStyle(Tabs.TOKEN)]}
          onPress={() => handleSwitchTab(Tabs.TOKEN)}>
          <Label style={handleSwitchLabelStyles(Tabs.TOKEN)} value="Token" />
        </TouchableOpacity>

        <TouchableOpacity
          testID="token-list-collectibles-tab"
          style={[styles.navItem, handleSwitchTabStyle(Tabs.COLLECTIBILES)]}
          onPress={() => handleSwitchTab(Tabs.COLLECTIBILES)}>
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
