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
import { Header, Icon, Icons, Label, Picture } from '../../atoms';
import { Button, ProfileAvatar } from '../../molecules';
import { BottomNavigation, TokenDetails, TokenList } from '../../organisms';

import { styles } from './HomeTemplate.styles';

type HomeTemplateProps = {
  profileAvatarPicture: ImageSourcePropType;
  tokenName: string;
  tokenShortName: string;
  tokenPrice: number;
  tokenPercentagePoint: number;
  tokenValue: number;
  tokens: Token[];
  routeName: string;
  onDropDown: () => void;
  onSent: () => void;
  onRecive: () => void;
  onBuy: () => void;
  onAddToken: () => void;
  onHomeNavigate: () => void;
  onSwapNavigate: () => void;
  onSettingsNavigate: () => void;
  onTokenNavigate: (tokenDetails: TokenDetails) => void;
};

export const HomeTemplate: React.FC<HomeTemplateProps> = ({
  profileAvatarPicture,
  tokenName,
  tokenShortName,
  tokenPrice,
  tokenPercentagePoint,
  tokenValue,
  tokens,
  routeName,
  onDropDown,
  onSent,
  onRecive,
  onBuy,
  onAddToken,
  onHomeNavigate,
  onSwapNavigate,
  onSettingsNavigate,
  onTokenNavigate,
}: HomeTemplateProps) => {
  const tokenHeaderValue = `${tokenValue} ${tokenShortName}`;
  const tokenPriceLabel = `$${tokenPrice}`;
  const tokenPercentagePointLabel =
    tokenPercentagePoint > 0
      ? ` +${tokenPercentagePoint}%`
      : ` ${tokenPercentagePoint}%`;
  const tokenPercentagePointLabelStyle =
    tokenPercentagePoint > 0 ? { color: '#76E268' } : { color: '#EA3943' };

  return (
    <SafeAreaView style={styles.homeTemplate}>
      <View style={styles.contentWrapper}>
        <Picture style={styles.ballPicture} pictureFile={BALL} />

        <View style={styles.homeBar}>
          <ProfileAvatar pictureFile={profileAvatarPicture} />

          <TouchableOpacity style={styles.homeBarDropDown} onPress={onDropDown}>
            <Text style={styles.homeBarDropDownLabel}>{tokenName} Main</Text>
            <Icon type={Icons.TICK_ARROW} />
          </TouchableOpacity>
        </View>

        <Header style={styles.header} value={tokenHeaderValue} />

        <View style={styles.labelsWrapper}>
          <Label value={tokenPriceLabel} variant="secondary" />
          <Label
            style={tokenPercentagePointLabelStyle}
            value={tokenPercentagePointLabel}
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

        <TokenList
          tokens={tokens}
          style={styles.tokenList}
          onTokenNavigate={onTokenNavigate}
        />

        <Button
          style={styles.addButton}
          label="Add Tokens"
          variant="ghost"
          iconType={Icons.PLUS}
          iconStyle={styles.addButtonIcon}
          onPress={onAddToken}
        />

        <BottomNavigation
          routeName={routeName}
          onHomeNavigate={onHomeNavigate}
          onSwapNavigate={onSwapNavigate}
          onSettingsNavigate={onSettingsNavigate}
        />
      </View>
    </SafeAreaView>
  );
};
