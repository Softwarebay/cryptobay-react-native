import { fireEvent, render, screen } from '@testing-library/react-native';
import React from 'react';
import '@testing-library/jest-native';
import 'react-native';
import { ImageSourcePropType } from 'react-native';
import renderer from 'react-test-renderer';

import { CONE, PAPER_PLANE, SHIELD } from '../../../../assets/pictures';

import { WalthoughtCarousel } from './WalthoughtCarousel';

const mockOncarouselEnd = jest.fn();

describe('WalthoughtCarousel Organism', () => {
  test('Component Snapshot', () => {
    const tree = renderer
      .create(<WalthoughtCarousel onCarouselSlidesEnd={mockOncarouselEnd} />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  test('ensure carousel changing slides works correctly', () => {
    render(<WalthoughtCarousel onCarouselSlidesEnd={mockOncarouselEnd} />);
    const picture = screen.getByTestId('walthought-carousel-picture');
    const header = screen.getByTestId('walthought-carousel-header');
    const dot = (dotNumber: number) =>
      screen.getByTestId(`walthought-carousel-slide-${dotNumber}-dot`);
    const currentDotStyle = { backgroundColor: '#FEBF32' };
    const carouselButton = screen.getByTestId('walthought-carousel-button');
    const slideTest = (
      slideNumber: number,
      pictureFile: ImageSourcePropType,
      headerValue: string,
      buttonLabel: string,
    ) => {
      expect(picture).toHaveProp('source', pictureFile);
      expect(header).toHaveTextContent(headerValue);
      expect(dot(slideNumber)).toHaveStyle(currentDotStyle);
      expect(carouselButton).toHaveTextContent(buttonLabel);
      fireEvent.press(carouselButton);
    };
    slideTest(1, CONE, 'Property Diversity', 'Next');
    slideTest(2, SHIELD, 'Safe and Convenient', 'Next');
    slideTest(3, PAPER_PLANE, 'Convenient Transaction', 'Get Start');
    expect(mockOncarouselEnd).toHaveBeenCalled();
  });
});
