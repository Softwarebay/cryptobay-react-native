import React from 'react';
import { View } from 'react-native';

import { Token } from '../../../types/token.type';
import { Badge, Caption, Label, Picture } from '../../atoms';

import { tockenListItemStyles } from './TokenList.styles';

export const TokenListItem: React.FC<Token> = ({
  picture,
  name,
  shortName,
  price,
  percentagePoint,
  value,
}: Token) => {
  const captionLabel = `$${price}`;
  const percentageLabel =
    percentagePoint > 0 ? `+${percentagePoint}%` : `${percentagePoint}%`;
  const variant = percentagePoint > 0 ? 'green' : 'red';
  const valueLabel = `${value} ${shortName}`;

  return (
    <View style={tockenListItemStyles.container}>
      <View style={tockenListItemStyles.dataWrapper}>
        <Picture style={tockenListItemStyles.picture} pictureFile={picture} />

        <View>
          <Label value={name} />

          <View style={tockenListItemStyles.valueData}>
            <Caption
              style={tockenListItemStyles.caption}
              value={captionLabel}
            />
            <Badge value={percentageLabel} variant={variant} />
          </View>
        </View>
      </View>

      <Label value={valueLabel} />
    </View>
  );
};
