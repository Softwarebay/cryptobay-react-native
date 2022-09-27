import { render, screen } from '@testing-library/react-native';
import React from 'react';
import '@testing-library/jest-native';
import renderer from 'react-test-renderer';

import 'react-native';
import { CONE } from '../../../../assets/pictures';

import { Picture } from './Picture';

describe('Picture Atom', () => {
  test('Component Snapshot', () => {
    const tree = renderer.create(<Picture pictureFile={CONE} />);
    expect(tree).toMatchSnapshot();
  });

  test('ensure custom styling works correctly', () => {
    const customStyles = { width: 50, height: 50 };
    render(
      <Picture testID="atom-picture" pictureFile={CONE} style={customStyles} />,
    );
    expect(screen.getByTestId('atom-picture')).toHaveStyle({
      width: 50,
      height: 50,
    });
  });
});
