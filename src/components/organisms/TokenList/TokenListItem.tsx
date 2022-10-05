import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { TouchableOpacity, View } from 'react-native';

import { Screens } from '../../../screens';
import { Token } from '../../../types/token.type';
import { Badge, Caption, Label, Picture } from '../../atoms';

import { styles } from './TokenListItem.styles';

export const TokenListItem: React.FC<Token> = ({
  picture,
  name,
  shortName,
  price,
  percentagePoint,
  value,
}: Token) => {
  const navigation = useNavigation();

  const tokenPicture = picture ? picture : 0;
  const captionLabel = price % 1 === 0 ? `$${price}.00` : `$${price}`;
  const percentageLabel =
    percentagePoint > 0 ? `+${percentagePoint}%` : `${percentagePoint}%`;
  const variant = percentagePoint > 0 ? 'green' : 'red';
  const valueLabel = `${value} ${shortName}`;
  const token = {
    shortName: shortName,
    value: value,
    price: price,
  };

  const onTokenNavigate = () =>
    navigation.navigate(Screens.TOKEN as never, { token: token } as never);

  return (
    <TouchableOpacity style={styles.container} onPress={onTokenNavigate}>
      <View style={styles.dataWrapper}>
        <Picture style={styles.picture} pictureFile={tokenPicture} />

        <View>
          <Label value={name} />

          <View style={styles.valueData}>
            <Caption style={styles.caption} value={captionLabel} />
            <Badge value={percentageLabel} variant={variant} />
          </View>
        </View>
      </View>

      <Label value={valueLabel} />
    </TouchableOpacity>
  );
};
