import React from 'react';
import Svg, { Path } from 'react-native-svg';
import { SvgIconProps } from '../svgIconProps.type';

export const ArrowIcon: React.FC<SvgIconProps> = ({
  width,
  height,
  color = '#FEBF32',
  testID,
}) => {
  return (
    <Svg
      testID={testID}
      width={width}
      height={height}
      viewBox="0 0 24 24"
      fill="none">
      <Path
        d="M11.5 18L11.5 6"
        stroke={color}
        stroke-width="1.5"
        stroke-linecap="round"
      />
      <Path
        d="M7 10L11.5 6L16 10"
        stroke={color}
        stroke-width="1.5"
        stroke-linecap="round"
      />
    </Svg>
  );
};
