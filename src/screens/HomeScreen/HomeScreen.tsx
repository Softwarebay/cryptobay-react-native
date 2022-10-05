import React from 'react';

import { PROFILE } from '../../../assets/pictures';
import { HomeTemplate } from '../../components/templates';
import { etheriumTockenMock, tokensMock } from '../../mocks';

export const HomeScreen: React.FC = () => {
  const onDropDown = () => console.log('onDropDown');

  const onSent = () => console.log('onSent');

  const onRecive = () => console.log('onRecive');

  const onBuy = () => console.log('onBuy');

  const onAddToken = () => console.log('onAddToken');

  return (
    <HomeTemplate
      profileAvatarPicture={PROFILE}
      tokenName={etheriumTockenMock.name}
      tokenShortName={etheriumTockenMock.shortName}
      tokenPrice={etheriumTockenMock.price}
      tokenPercentagePoint={etheriumTockenMock.percentagePoint}
      tokenValue={etheriumTockenMock.value}
      tokens={tokensMock}
      onDropDown={onDropDown}
      onSent={onSent}
      onRecive={onRecive}
      onBuy={onBuy}
      onAddToken={onAddToken}
    />
  );
};
