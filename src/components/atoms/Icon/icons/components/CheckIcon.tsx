import React from 'react';
import Svg, { Circle, Path } from 'react-native-svg';

import { SvgIconProps } from '../svgIconProps.type';

export const CheckIcon: React.FC<SvgIconProps> = ({
  width,
  height,
  testID,
}) => {
  return (
    <Svg
      testID={testID}
      width={width}
      height={height}
      viewBox="0 0 24 24"
      fill="none">
      <Circle
        cx="12"
        cy="12.0001"
        r="9.00375"
        stroke="#76E268"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M8.4425 12.3392L10.6104 14.5071L10.5964 14.4931L15.4874 9.60205"
        stroke="#76E268"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};
