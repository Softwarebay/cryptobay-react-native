import React from 'react';
import { SafeAreaView, Text, TouchableOpacity, View } from 'react-native';

import { BALL } from '../../../../assets/pictures';
import { Token } from '../../../types/token.type';
import { Header, Icon, Icons, Label, Picture } from '../../atoms';
import { Button, ProfileAvatar } from '../../molecules';
import { TokenDetails, TokenList } from '../../organisms';

import { styles } from './HomeTemplate.styles';

type HomeTemplateProps = {
  tokenName: string;
  tokenShortName: string;
  tokenPrice: number;
  tokenPercentagePoint: number;
  tokenValue: number;
  tokens: Token[];
  onPressDropDown: () => void;
  onPressSent: () => void;
  onPressRecive: () => void;
  onPressBuy: () => void;
  onPressAddToken: () => void;
  onPressToken: (tokenDetails: TokenDetails) => void;
};

export const HomeTemplate: React.FC<HomeTemplateProps> = ({
  tokenName,
  tokenShortName,
  tokenPrice,
  tokenPercentagePoint,
  tokenValue,
  tokens,
  onPressDropDown,
  onPressSent,
  onPressRecive,
  onPressBuy,
  onPressAddToken,
  onPressToken,
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
          <ProfileAvatar />

          <TouchableOpacity
            testID="home-bar-drop-down"
            style={styles.homeBarDropDown}
            onPress={onPressDropDown}>
            <Text style={styles.homeBarDropDownLabel}>{tokenName} Main</Text>
            <Icon type={Icons.TICK_ARROW} />
          </TouchableOpacity>
        </View>

        <Header style={styles.header} value={tokenHeaderValue} />

        <View style={styles.labelsWrapper}>
          <Label value={tokenPriceLabel} variant="secondary" />
          <Label
            testID="home-template-token-percentage-point"
            style={tokenPercentagePointLabelStyle}
            value={tokenPercentagePointLabel}
            variant="secondary"
          />
        </View>

        <View style={styles.actionButtonsWrapper}>
          <Button
            testID="home-action-sent"
            style={styles.actionButton}
            label="Sent"
            iconType={Icons.ARROW}
            iconStyle={styles.actionButtonIcon}
            labelStyle={styles.actionButtonLabel}
            onPress={onPressSent}
          />
          <Button
            testID="home-action-recive"
            style={styles.actionButton}
            label="Recive"
            iconType={Icons.ARROW}
            iconStyle={[styles.actionButtonIcon, styles.actionButtonIconRotate]}
            labelStyle={styles.actionButtonLabel}
            onPress={onPressRecive}
          />
          <Button
            testID="home-action-buy"
            label="Buy"
            iconType={Icons.BUY}
            iconStyle={styles.sctionButtonIconBuy}
            labelStyle={styles.actionButtonLabel}
            onPress={onPressBuy}
          />
        </View>

        <TokenList
          tokens={tokens}
          style={styles.tokenList}
          onPressToken={onPressToken}
        />

        <Button
          testID="home-action-add-token"
          style={styles.addButton}
          label="Add Tokens"
          variant="ghost"
          iconType={Icons.PLUS}
          iconStyle={styles.addButtonIcon}
          onPress={onPressAddToken}
        />
      </View>
    </SafeAreaView>
  );
};
