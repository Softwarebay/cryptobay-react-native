import React from 'react';
import { TouchableOpacity, ViewStyle } from 'react-native';

import { Icon, Icons, Label } from '../../atoms';

import { styles } from './Button.styles';

type ButtonProps = {
  label: string;
  onPress: () => void;
  variant?: 'dark' | 'bright' | 'ghost';
  style?: ViewStyle | ViewStyle[];
  iconType?: Icons;
  iconStyle?: ViewStyle | ViewStyle[];
  testID?: string;
  iconTestID?: string;
};

export const Button: React.FC<ButtonProps> = ({
  label,
  onPress,
  variant = 'dark',
  style,
  iconType,
  iconStyle,
  testID,
  iconTestID,
}: ButtonProps) => {
  const handleIconStyles = iconType ? styles.withIcon : styles.noIcon;
  const labelStyle = { color: styles[variant].color };

  return (
    <TouchableOpacity
      testID={testID}
      style={[styles.button, handleIconStyles, styles[variant], style]}
      onPress={onPress}>
      {iconType && (
        <Icon type={iconType} style={iconStyle} testID={iconTestID} />
      )}
      <Label value={label} variant="primary" style={labelStyle} />
    </TouchableOpacity>
  );
};
