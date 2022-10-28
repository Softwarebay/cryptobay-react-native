import { action } from '@storybook/addon-actions';
import { storiesOf } from '@storybook/react-native';
import React from 'react';

import StorybookView from '../../../../storybook/StorybookView';

import { ProfileAvatar } from './ProfileAvatar';

storiesOf('Molecules/ProfileAvatar', module)
  .addDecorator(getStory => <StorybookView>{getStory()}</StorybookView>)
  .add('Profile Avatar', () => (
    <ProfileAvatar onPressAvatar={action('onPressAvatar')} />
  ));
