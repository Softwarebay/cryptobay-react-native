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
import { useSwitchTab } from './useSwitchTab';

type TokenListProps = {
  tokens: Token[];
  style?: ViewStyle | ViewStyle[];
};

export const TokenList: React.FC<TokenListProps> = ({
  tokens,
  style,
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
        renderItem={({ item }: ListRenderItemInfo<Token>) => (
          <TokenListItem
            picture={item.picture}
            name={item.name}
            shortName={item.shortName}
            price={item.price}
            percentagePoint={item.percentagePoint}
            value={item.value}
          />
        )}
      />
    ),
    COLLECTIBILES: (
      <FlatList
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
          style={[styles.navItem, handleSwitchTabStyle(Tabs.TOKEN)]}
          onPress={() => handleSwitchTab(Tabs.TOKEN)}>
          <Label style={handleSwitchLabelStyles(Tabs.TOKEN)} value="Token" />
        </TouchableOpacity>

        <TouchableOpacity
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
