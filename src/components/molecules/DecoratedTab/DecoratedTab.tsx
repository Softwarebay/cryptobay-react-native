import React from 'react';
import { ViewStyle } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

import { Label } from '../../atoms';

import { styles } from './DecoratedTab.style';

type DecoratedTabProps = {
  label: string;
  checked: boolean;
  onPress: () => void;
  style?: ViewStyle | ViewStyle[];
  testID?: string;
  labelTestID?: string;
};

export const DecoratedTab: React.FC<DecoratedTabProps> = ({
  label,
  checked,
  onPress,
  style,
  testID,
  labelTestID,
}) => {
  const handleStyleByChecked = checked && styles.checked;
  const handleLabelStylesByChecked = checked
    ? styles.checkedLabel
    : styles.uncheckedLabel;

  return (
    <TouchableOpacity
      style={[style, styles.decoratedTab, handleStyleByChecked]}
      testID={testID}
      onPress={onPress}>
      <Label
        value={label}
        style={handleLabelStylesByChecked}
        testID={labelTestID}
      />
    </TouchableOpacity>
  );
};
