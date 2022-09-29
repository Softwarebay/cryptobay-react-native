import React from 'react';
import Svg, { Path } from 'react-native-svg';

import { SvgIconProps } from '../svgIconProps.type';

export const WalletIcon: React.FC<SvgIconProps> = ({
  width,
  height,
  color = '#ABAFC4',
  testID,
}: SvgIconProps) => {
  return (
    <Svg
      testID={testID}
      width={width}
      height={height}
      viewBox="0 0 25 24"
      fill="none">
      <Path
        d="M17.0949 13.125C16.8879 13.126 16.7209 13.294 16.7209 13.501C16.7209 13.708 16.8889 13.876 17.0959 13.875C17.3029 13.875 17.4709 13.707 17.4709 13.5C17.4709 13.293 17.3029 13.125 17.0949 13.125"
        stroke={color}
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <Path
        d="M3.5 5V18.5C3.5 19.605 4.395 20.5 5.5 20.5H19.5C20.605 20.5 21.5 19.605 21.5 18.5V8.5C21.5 7.395 20.605 6.5 19.5 6.5H5C4.172 6.5 3.5 5.828 3.5 5V5C3.5 4.172 4.172 3.5 5 3.5H17.5"
        stroke={color}
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </Svg>
  );
};
