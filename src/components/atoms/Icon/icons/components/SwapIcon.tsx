import React from 'react';
import Svg, { Path, G, Defs, Rect, ClipPath } from 'react-native-svg';

import { SvgIconProps } from '../svgIconProps.type';

export const SwapIcon: React.FC<SvgIconProps> = ({
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
      <G clip-path="url(#clip0_4028_2076)">
        <Path
          d="M18 21.5L16.5 20L18 18.5"
          stroke={color}
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <Path
          d="M16.5 20H18.5C19.2956 20 20.0587 19.6839 20.6213 19.1213C21.1839 18.5587 21.5 17.7956 21.5 17"
          stroke={color}
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <Path
          d="M7 2.5L8.5 4L7 5.5"
          stroke={color}
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <Path
          d="M8.5 4H6.5C5.70435 4 4.94129 4.31607 4.37868 4.87868C3.81607 5.44129 3.5 6.20435 3.5 7"
          stroke={color}
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <Path
          d="M14.5 13V17.554C14.5 17.9375 14.3477 18.3053 14.0765 18.5765C13.8053 18.8477 13.4375 19 13.054 19H4.946C4.5625 19 4.1947 18.8477 3.92352 18.5765C3.65235 18.3053 3.5 17.9375 3.5 17.554V12.446C3.5 12.0625 3.65235 11.6947 3.92352 11.4235C4.1947 11.1523 4.5625 11 4.946 11H12.5C13.0304 11 13.5391 11.2107 13.9142 11.5858C14.2893 11.9609 14.5 12.4696 14.5 13Z"
          stroke={color}
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <Path
          d="M9 16.5C9.82843 16.5 10.5 15.8284 10.5 15C10.5 14.1716 9.82843 13.5 9 13.5C8.17157 13.5 7.5 14.1716 7.5 15C7.5 15.8284 8.17157 16.5 9 16.5Z"
          stroke={color}
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <Path
          d="M10.5 8V6.446C10.5 6.0625 10.6523 5.6947 10.9235 5.42352C11.1947 5.15235 11.5625 5 11.946 5H19.5C20.0304 5 20.5391 5.21071 20.9142 5.58579C21.2893 5.96086 21.5 6.46957 21.5 7V11.554C21.5 11.9375 21.3477 12.3053 21.0765 12.5765C20.8053 12.8477 20.4375 13 20.054 13H17.5"
          stroke={color}
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <Path
          d="M14.9399 7.94C15.0773 7.79263 15.2429 7.67442 15.4269 7.59244C15.6109 7.51046 15.8095 7.46637 16.0109 7.46282C16.2123 7.45927 16.4124 7.49631 16.5991 7.57176C16.7859 7.6472 16.9556 7.75949 17.098 7.90193C17.2405 8.04436 17.3527 8.21403 17.4282 8.40081C17.5036 8.58758 17.5407 8.78764 17.5371 8.98905C17.5336 9.19045 17.4895 9.38908 17.4075 9.57308C17.3255 9.75708 17.2073 9.92268 17.0599 10.06"
          stroke={color}
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </G>
      <Defs>
        <ClipPath id="clip0_4028_2076">
          <Rect
            width="24"
            height="24"
            fill={color}
            transform="translate(0.5)"
          />
        </ClipPath>
      </Defs>
    </Svg>
  );
};
