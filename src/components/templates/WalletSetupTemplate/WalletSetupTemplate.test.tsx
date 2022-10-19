import React from 'react';
import '@testing-library/jest-native';
import 'react-native';
import renderer from 'react-test-renderer';

import { WalletSetupTemplate } from './WalletSetupTemplate';

const mockOnImportUsingSeedPhrase = jest.fn();
const mockOnCreateANewWallet = jest.fn();

describe('WalletSetupTemplate', () => {
  test('Component Snapshot', () => {
    const tree = renderer
      .create(
        <WalletSetupTemplate
          onImportUsingSeedPhrase={mockOnImportUsingSeedPhrase}
          onCreateANewWallet={mockOnCreateANewWallet}
        />,
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
