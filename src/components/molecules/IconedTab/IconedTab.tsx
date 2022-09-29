import React from 'react';
import { TouchableOpacity, ViewStyle } from 'react-native';

import { Label } from '../../atoms';
import { Icon } from '../../atoms/Icon/Icon';
import { Icons } from '../../atoms/Icon/icons.enum';

import { styles } from './IconedTab.styles';

type IconedTabProps = {
  label: string;
  checked: boolean;
  iconType: Icons;
  onPress: () => void;
  style?: ViewStyle | ViewStyle[];
  testID?: string;
  labelTestID?: string;
  iconTestID?: string;
};

export const IconedTab: React.FC<IconedTabProps> = ({
  label,
  checked,
  iconType,
  onPress,
  style,
  testID,
  labelTestID,
  iconTestID,
}: IconedTabProps) => {
  const iconColor = checked ? '#FEBF32' : '#ABAFC4';
  const handleLabelStylesByChecked = checked
    ? styles.checkedLabel
    : styles.uncheckedLabel;

  return (
    <TouchableOpacity
      style={[styles.iconedTab, style]}
      testID={testID}
      onPress={onPress}>
      <Icon type={iconType} color={iconColor} testID={iconTestID} />
      <Label
        value={label}
        variant="tertiary"
        style={handleLabelStylesByChecked}
        testID={labelTestID}
      />
    </TouchableOpacity>
  );
};
