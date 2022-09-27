import { storiesOf } from '@storybook/react-native';
import React from 'react';

import {
  BALL,
  CONE,
  ELLIPSES,
  PAPER_PLANE,
  SETUP,
  SHIELD,
} from '../../../../assets/pictures';
import StorybookView from '../../../../storybook/StorybookView';

import { Picture } from './Picture';

const pictureCustomStyles = {
  width: 50,
  height: 50,
};

storiesOf('Atoms/Picture', module)
  .addDecorator(getStory => <StorybookView>{getStory()}</StorybookView>)
  .add('Ball Picture', () => <Picture pictureFile={BALL} />)
  .add('Cone Picture', () => <Picture pictureFile={CONE} />)
  .add('Ellipses Picture', () => <Picture pictureFile={ELLIPSES} />)
  .add('Paper Plane Picture', () => <Picture pictureFile={PAPER_PLANE} />)
  .add('Styled Paper Plane Picture', () => (
    <Picture pictureFile={PAPER_PLANE} style={pictureCustomStyles} />
  ))
  .add('Setup Picture', () => <Picture pictureFile={SETUP} />)
  .add('Shield Picture', () => <Picture pictureFile={SHIELD} />);
