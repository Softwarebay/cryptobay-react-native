import React from 'react';

import { tockenListStyles } from './TokenList.styles';

enum Tabs {
  TOKEN = 'TOKEN',
  COLLECTIBILES = 'COLLECTIBILES',
}

export const useSwitchTab = () => {
  const [currentTab, setCurrentTab] = React.useState<Tabs>(Tabs.TOKEN);

  const handleSwitchTab = (tab: Tabs) => setCurrentTab(tab);

  const handleSwitchTabStyle = (tab: Tabs) =>
    tab === currentTab && tockenListStyles.currentTab;

  const handleSwitchLabelStyles = (tab: Tabs) =>
    tab !== currentTab && tockenListStyles.previousTab;

  return {
    Tabs,
    currentTab,
    handleSwitchTab,
    handleSwitchTabStyle,
    handleSwitchLabelStyles,
  };
};
