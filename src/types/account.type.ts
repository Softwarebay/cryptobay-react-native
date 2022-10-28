import { ImageSourcePropType } from 'react-native';

export type Account = {
  profilePicture: ImageSourcePropType;
  accountName: string;
  tokenShortName: string;
  tokenValue: number;
};
