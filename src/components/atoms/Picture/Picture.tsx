import React from 'react';
import { Image, ImageSourcePropType, ImageStyle } from 'react-native';

type PictureProps = {
  pictureFile: ImageSourcePropType;
  style?: ImageStyle | ImageStyle[];
  testID?: string;
};

export const Picture: React.FC<PictureProps> = ({
  pictureFile,
  style,
  testID,
}: PictureProps) => {
  return <Image testID={testID} source={pictureFile} style={style} />;
};
