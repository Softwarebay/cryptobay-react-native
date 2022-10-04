import React from 'react';

import { styles } from './TokenList.styles';

enum Tabs {
  TOKEN = 'TOKEN',
  COLLECTIBILES = 'COLLECTIBILES',
}

export const useSwitchTab = () => {
  const [currentTab, setCurrentTab] = React.useState<Tabs>(Tabs.TOKEN);

  const handleSwitchTab = (tab: Tabs) => setCurrentTab(tab);

  const handleSwitchTabStyle = (tab: Tabs) =>
    tab === currentTab && styles.currentTab;

  const handleSwitchLabelStyles = (tab: Tabs) =>
    tab !== currentTab && styles.previousTab;

  return {
    Tabs,
    currentTab,
    handleSwitchTab,
    handleSwitchTabStyle,
    handleSwitchLabelStyles,
  };
};
