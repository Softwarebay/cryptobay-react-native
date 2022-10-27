import React from 'react';
import { Pressable, ViewStyle } from 'react-native';

import { PROFILE } from '../../../../assets/pictures';
import { Icon, Icons, Picture } from '../../atoms';

import { styles } from './ProfileAvatar.styles';

type ProfileAvatarProps = {
  testID?: string;
  pictureTestID?: string;
  iconTestID?: string;
  onPressAvatar: () => void;
};

export const ProfileAvatar: React.FC<ProfileAvatarProps> = ({
  testID,
  pictureTestID,
  iconTestID,
  onPressAvatar,
}: ProfileAvatarProps) => {
  const pictureStyle = {
    width: 42,
    height: 42,
    borderRadius: 42,
    backgroundColor: '#2A2D3C',
  };

  const iconStyle = {
    position: 'absolute',
    left: 32,
    top: 22,
  } as ViewStyle;

  return (
    <Pressable
      testID={testID}
      style={styles.profileAvatar}
      onPress={onPressAvatar}>
      <Picture
        pictureFile={PROFILE}
        style={pictureStyle}
        testID={pictureTestID}
      />
      <Icon
        type={Icons.ELIPSE_PROFILE}
        width={20}
        height={20}
        style={iconStyle}
        testID={iconTestID}
      />
    </Pressable>
  );
};
