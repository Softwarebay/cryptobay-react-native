import { ImageSourcePropType, View } from 'react-native';
import React from 'react';
import { Badge, Caption, Label, Picture } from '../../atoms';
import { styles } from './TockenListItem.styles';

type TockenListItemProps = {
  tockenPicture: ImageSourcePropType;
  tockenName: string;
  tockenDolarValue: string;
  tockenPercentValueChange: number;
  tockenValue: string;
};

export const TockenListItem: React.FC<TockenListItemProps> = ({
  tockenPicture,
  tockenName,
  tockenDolarValue,
  tockenPercentValueChange,
  tockenValue,
}) => {
  return (
    <View style={styles.tockenListItem}>
      <Picture pictureFile={tockenPicture} style={styles.tockenPicture} />
      <View style={styles.tockenDataWrapper}>
        <Label value={tockenName} />

        <View style={styles.tockenCurrencyDataWrapper}>
          <Caption value={tockenDolarValue} style={styles.tockenDolarValue} />
          <Badge value={tockenPercentValueChange} />
        </View>
      </View>

      <View style={styles.tockenPriceWrapper}>
        <Label value={tockenValue} />
      </View>
    </View>
  );
};
