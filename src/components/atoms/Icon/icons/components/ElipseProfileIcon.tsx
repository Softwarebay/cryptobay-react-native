import React from 'react';
import Svg, { Circle, ClipPath, Defs, G, Path, Rect } from 'react-native-svg';
import { SvgIconProps } from '../svgIconProps.type';

export const ElipseProfileIcon: React.FC<SvgIconProps> = ({
  width,
  height,
  testID,
}: SvgIconProps) => {
  return (
    <Svg
      testID={testID}
      width={width}
      height={height}
      viewBox="0 0 16 16"
      fill="none">
      <Circle cx="8" cy="8" r="8" fill="#FEBF32" />
      <G clip-path="url(#clip0_4082_2735)">
        <Path
          d="M6.5 10L7.5 11L6.5 12"
          stroke="#17171A"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <Path
          d="M4 8.5V10C4 10.2652 4.10536 10.5196 4.29289 10.7071C4.48043 10.8946 4.73478 11 5 11H7.5"
          stroke="#17171A"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <Path
          d="M9.5 6L8.5 5L9.5 4"
          stroke="#17171A"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <Path
          d="M12 7.5V6C12 5.73478 11.8946 5.48043 11.7071 5.29289C11.5196 5.10536 11.2652 5 11 5H8.5"
          stroke="#17171A"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <Path
          d="M6 7H4.5C4.23478 7 3.98043 6.89464 3.79289 6.70711C3.60536 6.51957 3.5 6.26522 3.5 6V4.5C3.5 4.23478 3.60536 3.98043 3.79289 3.79289C3.98043 3.60536 4.23478 3.5 4.5 3.5H6C6.26522 3.5 6.51957 3.60536 6.70711 3.79289C6.89464 3.98043 7 4.23478 7 4.5V6C7 6.26522 6.89464 6.51957 6.70711 6.70711C6.51957 6.89464 6.26522 7 6 7Z"
          stroke="#17171A"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <Path
          d="M11.5 12.5H10C9.73478 12.5 9.48043 12.3946 9.29289 12.2071C9.10536 12.0196 9 11.7652 9 11.5V10C9 9.73478 9.10536 9.48043 9.29289 9.29289C9.48043 9.10536 9.73478 9 10 9H11.5C11.7652 9 12.0196 9.10536 12.2071 9.29289C12.3946 9.48043 12.5 9.73478 12.5 10V11.5C12.5 11.7652 12.3946 12.0196 12.2071 12.2071C12.0196 12.3946 11.7652 12.5 11.5 12.5Z"
          stroke="#17171A"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </G>
      <Defs>
        <ClipPath id="clip0_4082_2735">
          <Rect
            width="12"
            height="12"
            fill="white"
            transform="translate(2 2)"
          />
        </ClipPath>
      </Defs>
    </Svg>
  );
};
