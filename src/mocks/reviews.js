import momentRandom from "moment-random";
import {generateGuid, getRandomArrayElement} from "../utils/common";
import {Film} from "../consts";

const reviewTexts = [
  `The well-known Universal Studios film company had a plan to shoot a movie “Wanted” in 2004. The eponymous comic book by Mark Millar was picked up for the film\`s plot. Company’s management wanted to make a hard film with a rating of “hard-R”.`,
  `Beautiful Mind is a biographical movie about John Forbes Nash junior, mathematical genius with hard fate. At the beginning of his career he has made enormous contribution in the field of Game Theory, which was a revolution in this mathematical area and almost brought international fame to the author. The movie was filmed in 2001 by Ron Howard and today it is called modern classics: a true drama, making you think and evoking emotions.`,
  `Robert Downey Jr. and Jude Law tried to embody unforgettable images of Sherlock Holmes and Doctor Watson in this bold new film version. In G. Ritchie’s “Sherlock Holmes” the legendary detective shows not only his unmatched intelligence, but also considerable physical training as well.`,
  `“Kites” is not a traditional Indian movie, but rather a breath-taking action. This film is a romantic love story of an Indian guy Gee (Bollywood star Rithik Roshan) and a Mexican girl Natasha (Barbara Mori). They fell in love at first sight, despite the fact that she did not understand Hindi and speaks only Spanish, while he could speak only Hindi and English. Besides, Natasha was already engaged to another man. However, there are no barriers for true love.`
];

const reviewNames = [
  `John Doe`,
  `Ricky2004`,
  `MRX`,
  `Elliot`,
  `Darlene`
];

const generateReviewRating = () => {
  return (Math.random() * (Film.RATING.max).toFixed(1));
};

const generateReviewDate = () => {
  return momentRandom().fromNow();
};

export const generateReview = () => {
  return {
    id: generateGuid(),
    text: getRandomArrayElement(reviewTexts),
    rating: generateReviewRating(),
    author: getRandomArrayElement(reviewNames),
    date: generateReviewDate()
  };
};

export const generateReviews = () => {
  return new Array(Film.REVIEWS.COUNT.main).fill().map(generateReview);
};
