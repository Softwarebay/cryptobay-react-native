import React from 'react';
import { SafeAreaView, TouchableOpacity, View } from 'react-native';

import { BALL } from '../../../../assets/pictures';
import { Swap } from '../../../types/swap.type';
import { Header, Icon, Icons, Label, Picture } from '../../atoms';
import { Button } from '../../molecules';
import { BottomNavigation, SwapDetails } from '../../organisms';
import { SwapsList } from '../../organisms/SwapsList/SwapsList';

import { styles } from './TokenTemplate.styles';

type TokenTemplateProps = {
  tokenShortName: string;
  tokenValue: number;
  tokenPrice: number;
  tokenSwapHistory: Swap[];
  routeName: string;
  onGoBack: () => void;
  onSent: () => void;
  onReceive: () => void;
  onHomeNavigate: () => void;
  onSwapNavigate: () => void;
  onSettingsNavigate: () => void;
  onDetailsNavigate: (swapDetails: SwapDetails) => void;
};

export const TokenTemplate: React.FC<TokenTemplateProps> = ({
  tokenShortName,
  tokenValue,
  tokenPrice,
  tokenSwapHistory,
  routeName,
  onGoBack,
  onSent,
  onReceive,
  onHomeNavigate,
  onSwapNavigate,
  onSettingsNavigate,
  onDetailsNavigate,
}) => {
  const backButtonHitSlop = { top: 16, bottom: 16, left: 16, right: 16 };

  return (
    <SafeAreaView style={styles.tokenTemplate}>
      <View style={styles.contentWrapper}>
        <Picture style={styles.ballPicture} pictureFile={BALL} />

        <View style={styles.navBar}>
          <TouchableOpacity
            style={styles.backButton}
            onPress={onGoBack}
            hitSlop={backButtonHitSlop}>
            <Icon style={styles.backButtonIcon} type={Icons.TICK_ARROW} />
          </TouchableOpacity>

          <Label value={tokenShortName} />
        </View>

        <Header value={`${tokenValue} ${tokenShortName}`} />

        <Label
          style={styles.priceLabel}
          value={`$${tokenPrice}`}
          variant="secondary"
        />

        <View style={styles.actionButtonsWrapper}>
          <Button
            style={styles.actionButton}
            label="Sent"
            onPress={onSent}
            iconType={Icons.ARROW}
          />
          <Button
            style={styles.actionButton}
            label="Receive"
            onPress={onReceive}
            iconType={Icons.ARROW}
            iconStyle={{
              transform: [{ rotate: '180deg' }],
            }}
          />
        </View>

        <SwapsList
          tokenShortName={tokenShortName}
          swapsHistory={tokenSwapHistory}
          onDetailsNavigate={onDetailsNavigate}
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
