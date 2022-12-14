import React from 'react';
import Svg, { ClipPath, Defs, G, Path, Rect } from 'react-native-svg';

import { SvgIconProps } from '../svgIconProps.type';

export const BuyIcon: React.FC<SvgIconProps> = ({ width, height, testID }) => {
  return (
    <Svg
      testID={testID}
      width={width}
      height={height}
      viewBox="0 0 24 24"
      fill="none">
      <G clip-path="url(#clip0_4028_1970)">
        <Path
          d="M19.1119 6.49996C18.8816 6.19602 18.6318 5.90741 18.3639 5.63596C17.5282 4.80022 16.5361 4.13727 15.4441 3.68497C14.3522 3.23267 13.1818 2.99988 11.9999 2.99988C10.818 2.99988 9.6477 3.23267 8.55576 3.68497C7.46383 4.13727 6.47167 4.80022 5.63594 5.63596C5.36839 5.90766 5.11854 6.19626 4.88794 6.49996"
          stroke="#FEBF32"
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <Path
          d="M4.88794 17.5C5.11794 17.799 5.36194 18.09 5.63594 18.364C6.47167 19.1997 7.46383 19.8627 8.55576 20.315C9.6477 20.7673 10.818 21.0001 11.9999 21.0001C13.1818 21.0001 14.3522 20.7673 15.4441 20.315C16.5361 19.8627 17.5282 19.1997 18.3639 18.364C18.6379 18.09 18.8809 17.799 19.1119 17.5"
          stroke="#FEBF32"
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <Path
          d="M6.521 14.571H3.5V12.04H6.519C7.218 12.04 7.785 12.607 7.785 13.306C7.78513 13.4721 7.75253 13.6366 7.68907 13.7901C7.62561 13.9435 7.53252 14.083 7.41514 14.2005C7.29775 14.3179 7.15836 14.4111 7.00494 14.4747C6.85152 14.5383 6.68707 14.571 6.521 14.571V14.571Z"
          stroke="#FEBF32"
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <Path
          d="M3.5 12.04V9.42896H6.2C6.54637 9.42896 6.87856 9.56655 7.12348 9.81147C7.3684 10.0564 7.506 10.3886 7.506 10.735C7.506 11.0813 7.3684 11.4135 7.12348 11.6584C6.87856 11.9034 6.54637 12.041 6.2 12.041"
          stroke="#FEBF32"
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <Path
          d="M17.2141 9.42896L19.3571 12.344L21.5001 9.42896"
          stroke="#FEBF32"
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <Path
          d="M19.3601 14.53V12.34"
          stroke="#FEBF32"
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <Path
          d="M14.6429 9.42896V12.429C14.6429 12.9973 14.4172 13.5424 14.0153 13.9443C13.6134 14.3462 13.0683 14.572 12.4999 14.572C11.9316 14.572 11.3865 14.3462 10.9846 13.9443C10.5827 13.5424 10.3569 12.9973 10.3569 12.429V9.42896"
          stroke="#FEBF32"
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </G>
      <Defs>
        <ClipPath id="clip0_4028_1970">
          <Rect width="24" height="24" fill="white" />
        </ClipPath>
      </Defs>
    </Svg>
  );
};
