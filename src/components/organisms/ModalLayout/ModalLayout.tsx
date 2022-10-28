import { BlurView } from '@react-native-community/blur';
import React from 'react';
import { Pressable, View } from 'react-native';

import { styles } from './ModalLayout.styles';

type ModalLayout = {
  children: React.ReactNode;
  blurFlexValue?: number;
  contentFlexValue?: number;
  onPressModal: () => void;
};

export const ModalLayout: React.FC<ModalLayout> = ({
  children,
  blurFlexValue = 1,
  contentFlexValue = 2,
  onPressModal,
}: ModalLayout) => {
  const blurFlexStyle = { flex: blurFlexValue };
  const contentFlexStyle = { flex: contentFlexValue };

  return (
    <Pressable style={styles.modalLayout} onPress={onPressModal}>
      <BlurView style={[styles.blur, blurFlexStyle]}>
        <View style={styles.indicator} />
      </BlurView>
      <View style={[styles.content, contentFlexStyle]}>{children}</View>
    </Pressable>
  );
};
