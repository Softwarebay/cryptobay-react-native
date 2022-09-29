import React from 'react';
import Svg, { Path } from 'react-native-svg';

import { SvgIconProps } from '../svgIconProps.type';

export const TickArrowIcon: React.FC<SvgIconProps> = ({
  width,
  height,
  testID,
}: SvgIconProps) => {
  return (
    <Svg
      testID={testID}
      width={width}
      height={height}
      viewBox="0 0 24 24"
      fill="none">
      <Path
        d="M8 10L12 14L16 10"
        stroke="white"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </Svg>
  );
};
