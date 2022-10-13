import React from 'react';
import { TouchableOpacity, View } from 'react-native';

import { Token } from '../../../types/token.type';
import { Badge, Caption, Label, Picture } from '../../atoms';

import { styles } from './TokenListItem.styles';
import { TokenDetails } from './tokenDetails.type';

type TokenListItemProps = Token & {
  onTokenNavigate: (tokenDetails: TokenDetails) => void;
};

export const TokenListItem: React.FC<TokenListItemProps> = ({
  picture,
  name,
  shortName,
  price,
  percentagePoint,
  value,
  onTokenNavigate,
}: TokenListItemProps) => {
  const tokenPicture = picture ? picture : 0;
  const captionLabel = price % 1 === 0 ? `$${price}.00` : `$${price}`;
  const percentageLabel =
    percentagePoint > 0 ? `+${percentagePoint}%` : `${percentagePoint}%`;
  const variant = percentagePoint > 0 ? 'green' : 'red';
  const valueLabel = `${value} ${shortName}`;

  const tokenDetails = {
    shortName: shortName,
    value: value,
    price: price,
    percentagePoint: percentagePoint,
  } as TokenDetails;

  const handleOnTokenNavigate = () => onTokenNavigate(tokenDetails);

  return (
    <TouchableOpacity style={styles.container} onPress={handleOnTokenNavigate}>
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
