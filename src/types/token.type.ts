import { ImageSourcePropType } from 'react-native';

export type Token = {
  picture?: ImageSourcePropType;
  name: string;
  shortName: string;
  price: number;
  percentagePoint: number;
  value: number;
};
