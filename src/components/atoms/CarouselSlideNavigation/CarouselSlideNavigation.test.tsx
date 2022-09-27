import { render, screen } from '@testing-library/react-native';
import React from 'react';
import '@testing-library/jest-native';
import renderer from 'react-test-renderer';

import 'react-native';
import { CarouselSlideNavigation } from './CarouselSlideNavigation';

describe('CarouselSlideNavigation Atom', () => {
  test('Component Snapshot', () => {
    const tree = renderer
      .create(<CarouselSlideNavigation slide={1} />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  test('ensure dots show current slide correctly', () => {
    const { rerender } = render(<CarouselSlideNavigation slide={1} />);
    const sliderDot = (slideNumber: number) =>
      screen.getByTestId(`slide-${slideNumber}-navigation-dot`);
    expect(sliderDot(1)).toHaveStyle({ backgroundColor: '#FEBF32' });
    expect(sliderDot(2)).toHaveStyle({ backgroundColor: '#4C516B' });
    expect(sliderDot(3)).toHaveStyle({ backgroundColor: '#4C516B' });
    rerender(<CarouselSlideNavigation slide={2} />);
    expect(sliderDot(1)).toHaveStyle({ backgroundColor: '#4C516B' });
    expect(sliderDot(2)).toHaveStyle({ backgroundColor: '#FEBF32' });
    expect(sliderDot(3)).toHaveStyle({ backgroundColor: '#4C516B' });
    rerender(<CarouselSlideNavigation slide={3} />);
    expect(sliderDot(1)).toHaveStyle({ backgroundColor: '#4C516B' });
    expect(sliderDot(2)).toHaveStyle({ backgroundColor: '#4C516B' });
    expect(sliderDot(3)).toHaveStyle({ backgroundColor: '#FEBF32' });
  });
});
