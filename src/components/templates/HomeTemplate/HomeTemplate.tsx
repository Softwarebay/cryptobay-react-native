import React from 'react';
import {
  ImageSourcePropType,
  SafeAreaView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

import { BALL } from '../../../../assets/pictures';
import { Token } from '../../../types/token.type';
import { Header, Label, Picture } from '../../atoms';
import { Icon } from '../../atoms/Icon/Icon';
import { Icons } from '../../atoms/Icon/icons.enum';
import { Button, ProfileAvatar } from '../../molecules';
import { TokenList } from '../../organisms';

import { styles } from './HomeTemplate.styles';

type HomeTemplateProps = {
  profileAvatarPicture: ImageSourcePropType;
  currencyName: string;
  currencyShortName: string;
  currencyPrice: number;
  currencyPercentagePoint: number;
  currencyValue: number;
  tokens: Token[];
  onDropDown: () => void;
  onSent: () => void;
  onRecive: () => void;
  onBuy: () => void;
  onAddToken: () => void;
  onHomeNavigate: () => void;
  onSwapNavigate: () => void;
  onSettingsNavigate: () => void;
};

export const HomeTemplate: React.FC<HomeTemplateProps> = ({
  profileAvatarPicture,
  currencyName,
  currencyShortName,
  currencyPrice,
  currencyPercentagePoint,
  currencyValue,
  tokens,
  onDropDown,
  onSent,
  onRecive,
  onBuy,
  onAddToken,
  onHomeNavigate,
  onSwapNavigate,
  onSettingsNavigate,
}: HomeTemplateProps) => {
  const currencyHeaderValue = `${currencyValue} ${currencyShortName}`;
  const currencyPriceLabel = `$${currencyPrice}`;
  const currencyPercentagePointLabel =
    currencyPercentagePoint > 0
      ? ` +${currencyPercentagePoint}%`
      : ` ${currencyPercentagePoint}%`;
  const currencyPercentagePointLabelStyle =
    currencyPercentagePoint > 0 ? { color: '#76E268' } : { color: '#EA3943' };

  return (
    <SafeAreaView style={styles.homeTemplate}>
      <View style={styles.contentWrapper}>
        <Picture style={styles.ballPicture} pictureFile={BALL} />

        <View style={styles.homeBar}>
          <ProfileAvatar pictureFile={profileAvatarPicture} />

          <TouchableOpacity style={styles.homeBarDropDown} onPress={onDropDown}>
            <Text style={styles.homeBarDropDownLabel}>{currencyName} Main</Text>
            <Icon type={Icons.TICK_ARROW} />
          </TouchableOpacity>
        </View>

        <Header style={styles.header} value={currencyHeaderValue} />

        <View style={styles.labelsWrapper}>
          <Label value={currencyPriceLabel} variant="secondary" />
          <Label
            style={currencyPercentagePointLabelStyle}
            value={currencyPercentagePointLabel}
            variant="secondary"
          />
        </View>

        <View style={styles.actionButtonsWrapper}>
          <Button
            style={styles.actionButton}
            label="Sent"
            iconType={Icons.ARROW}
            iconStyle={styles.actionButtonIcon}
            onPress={onSent}
          />
          <Button
            style={styles.actionButton}
            label="Recive"
            iconType={Icons.ARROW}
            iconStyle={[styles.actionButtonIcon, styles.actionButtonIconRotate]}
            onPress={onRecive}
          />
          <Button
            style={styles.actionButton}
            label="Buy"
            iconType={Icons.BUY}
            iconStyle={styles.actionButtonIcon}
            onPress={onBuy}
          />
        </View>

        <TokenList tokens={tokens} style={styles.tokenList} />

        <Button
          style={styles.addButton}
          label="Add Tokens"
          variant="ghost"
          iconType={Icons.PLUS}
          iconStyle={styles.addButtonIcon}
          onPress={onAddToken}
        />

        <View style={styles.navBar}>
          <TouchableOpacity style={styles.navBarItem} onPress={onHomeNavigate}>
            <Icon type={Icons.WALLET} />
            <Label value="Wallet" variant="tertiary" />
          </TouchableOpacity>

          <TouchableOpacity style={styles.navBarItem} onPress={onSwapNavigate}>
            <Icon type={Icons.SWAP} />
            <Label value="Swap" variant="tertiary" />
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.navBarItem}
            onPress={onSettingsNavigate}>
            <Icon type={Icons.SETTINGS} />
            <Label value="Settings" variant="tertiary" />
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};
