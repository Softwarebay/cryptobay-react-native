import AsyncStorage from '@react-native-community/async-storage';
import { withKnobs } from '@storybook/addon-knobs';
import {
  getStorybookUI,
  configure,
  addDecorator,
} from '@storybook/react-native';
import { AppRegistry } from 'react-native';

import './rn-addons';
import { name as appName } from '../app.json';

import { loadStories } from './storyLoader';

addDecorator(withKnobs);

configure(() => {
  loadStories();
}, module);

const StorybookUIRoot = getStorybookUI({
  asyncStorage: AsyncStorage,
});

AppRegistry.registerComponent(appName, () => StorybookUIRoot);

export default StorybookUIRoot;
