import React from 'react';
import {
  FlatList,
  ListRenderItemInfo,
  TouchableOpacity,
  View,
} from 'react-native';

import { Token } from '../../../types/token.type';
import { Label } from '../../atoms';

import { TokenListItem } from './TockenListItem';
import { tockenListStyles } from './TokenList.styles';
import { useSwitchTab } from './useSwitchTab';

type TokenListProps = {
  tokens: Token[];
};

export const TokenList: React.FC<TokenListProps> = ({
  tokens,
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
        style={tockenListStyles.list}
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
        style={tockenListStyles.list}
        data={['Collectibiles in Progress']}
        renderItem={({ item }: ListRenderItemInfo<string>) => (
          <Label value={item} />
        )}
      />
    ),
  };

  return (
    <View style={tockenListStyles.container}>
      <View style={tockenListStyles.nav}>
        <TouchableOpacity
          style={[tockenListStyles.navItem, handleSwitchTabStyle(Tabs.TOKEN)]}
          onPress={() => handleSwitchTab(Tabs.TOKEN)}>
          <Label style={handleSwitchLabelStyles(Tabs.TOKEN)} value="Token" />
        </TouchableOpacity>

        <TouchableOpacity
          style={[
            tockenListStyles.navItem,
            handleSwitchTabStyle(Tabs.COLLECTIBILES),
          ]}
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
