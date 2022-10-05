import { ImageSourcePropType } from 'react-native';

import { Swap } from './swap.type';

export type Token = {
  name: string;
  shortName: string;
  price: number;
  percentagePoint: number;
  value: number;
  picture?: ImageSourcePropType;
  swapHistory?: Swap[];
};
