import { render, screen } from '@testing-library/react-native';
import React from 'react';
import '@testing-library/jest-native';
import renderer from 'react-test-renderer';

import 'react-native';

import { ProfileAvatar } from './ProfileAvatar';

describe('ProfileAvatar Molecule', () => {
  test('Component Snapshot', () => {
    const tree = renderer.create(<ProfileAvatar />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  test('ensure custom styles works correctly', () => {
    render(
      <ProfileAvatar
        pictureTestID="profile-avatar-picture"
        iconTestID="profile-avatar-icon"
      />,
    );
    expect(screen.getByTestId('profile-avatar-picture')).toHaveStyle({
      width: 42,
      height: 42,
      borderRadius: 42,
      backgroundColor: '#2A2D3C',
    });
    expect(screen.getByTestId('profile-avatar-icon')).toHaveStyle({
      position: 'absolute',
      left: 32,
      top: 22,
    });
  });
});
