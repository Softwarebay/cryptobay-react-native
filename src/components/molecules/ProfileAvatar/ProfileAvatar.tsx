import React from 'react';
import { ImageSourcePropType, StyleProp, View, ViewStyle } from 'react-native';

import { Picture } from '../../atoms';
import { Icon } from '../../atoms/Icon/Icon';
import { Icons } from '../../atoms/Icon/icons.enum';

import { styles } from './ProfileAvatar.styles';

type ProfileAvatarProps = {
  pictureFile: ImageSourcePropType;
  pictureTestID?: string;
  iconTestID?: string;
};

export const ProfileAvatar: React.FC<ProfileAvatarProps> = ({
  pictureFile,
  pictureTestID,
  iconTestID,
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
  } as StyleProp<ViewStyle>;

  return (
    <View style={styles.profileAvatar}>
      <Picture
        pictureFile={pictureFile}
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
    </View>
  );
};
