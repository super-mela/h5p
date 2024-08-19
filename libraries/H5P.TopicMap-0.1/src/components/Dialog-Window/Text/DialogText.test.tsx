import { render } from '@testing-library/react';
import type { H5PImage } from 'h5p-types';
import * as React from 'react';
import { DialogText } from './DialogText';

describe(DialogText.name, () => {
  it('Should have rendered', () => {
    const topicImage: H5PImage = {
      path: 'https://images.unsplash.com/photo-1643114673614-55af01ec8dfc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80',
    };
    const introduction = 'Tree trunks grow however makes them happy. Let\'s get crazy. This is the time to get out all your flustrations, much better than kicking the dog around the house or taking it out on your spouse. Volunteering your time; it pays you and your whole community fantastic dividends.';
    const bodyText = `Let's have a little bit of fun today. That easy. Clouds are free they come and go as they please. I'm gonna start with a little Alizarin crimson and a touch of Prussian blue Just go back and put one little more happy tree in there. Everything is happy if you choose to make it that way.

    You can spend all day playing with mountains. Follow the lay of the land. It's most important. Poor old tree. Little short strokes.
    
    In this world, everything can be happy. Have fun with it. Nothing's gonna make your husband or wife madder than coming home and having a snow-covered dinner. When things happen - enjoy them. They're little gifts.`;
    const topicImageAltText = 'Flying king eagle holding a fish in paws.';

    const { container } = render(
      <DialogText
        topicImage={topicImage}
        introduction={introduction}
        bodyText={bodyText}
        topicImageAltText={topicImageAltText}
      />,
    );

    expect(container.querySelector('div')).toBeTruthy();
  });
});
