import React from 'react';
import { TouchableOpacity, ViewStyle } from 'react-native';

import { Label } from '../../atoms';
import { Icon } from '../../atoms/Icon/Icon';
import { Icons } from '../../atoms/Icon/icons.enum';

import { styles } from './Button.styles';

type ButtonProps = {
  label: string;
  onPress: () => void;
  variant?: 'dark' | 'bright';
  iconType?: Icons;
  iconStyle?: ViewStyle;
  testID?: string;
  iconTestID?: string;
};

export const Button: React.FC<ButtonProps> = ({
  label,
  variant = 'dark',
  onPress,
  iconType,
  iconStyle,
  testID,
  iconTestID,
}: ButtonProps) => {
  const handleIconStyles = iconType ? styles.withIcon : styles.noIcon;
  const handleButtonVariant = variant === 'dark' ? styles.dark : styles.bright;
  const labelStyle = { color: handleButtonVariant.color };

  return (
    <TouchableOpacity
      testID={testID}
      style={[styles.button, handleIconStyles, handleButtonVariant]}
      onPress={onPress}>
      {iconType && (
        <Icon type={iconType} style={iconStyle} testID={iconTestID} />
      )}
      <Label value={label} variant="primary" style={labelStyle} />
    </TouchableOpacity>
  );
};
