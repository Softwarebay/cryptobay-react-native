import React from 'react';
import Svg, { Path } from 'react-native-svg';

import { SvgIconProps } from '../svgIconProps.type';

export const PlusIcon: React.FC<SvgIconProps> = ({
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
        d="M12 5V19"
        stroke="#FEBF32"
        stroke-width="1.5"
        stroke-linecap="round"
      />
      <Path
        d="M5 12C9.66667 12 19 12 19 12"
        stroke="#FEBF32"
        stroke-width="1.5"
        stroke-linecap="round"
      />
    </Svg>
  );
};
