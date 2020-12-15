export const extend = (a, b) => {
  return Object.assign({}, a, b);
};

export const getFormattedTime = (time) => {
  time = Math.floor(time);
  const minutes = Math.floor(time / 60);
  const seconds = Math.floor(time - minutes * 60);

  const minutesVal = minutes < 10 ? `0${minutes}` : String(minutes);
  const secondsVal = seconds < 10 ? `0${seconds}` : String(seconds);

  return `${minutesVal}:${secondsVal}`;
};

export const getVideoProgress = (video) => (Math.floor(video.currentTime) / (Math.floor(video.duration) / 100));

export const getMatchingFilm = (films, {params}) => films.find((item) => item.id === +(params.id));

export const createRatingTag = (value) => {
  const tags = {
    bad: `Bad`,
    normal: `Normal`,
    good: `Good`,
    veryGood: `Very good`,
    awesome: `Awesome`
  };

  let tag = null;

  if (value <= 3) {
    tag = tags.bad;
  } else if (value > 3 && value <= 5) {
    tag = tags.normal;
  } else if (value > 5 && value !== 10) {
    tag = tags.veryGood;
  } else if (value === 10) {
    tag = tags.awesome;
  }

  return tag;
};

export const updateFilm = (films, changedFilm) => {
  return films.map((film) => film.id === changedFilm.id ? changedFilm : film);
};

export const toggleFavoriteStatus = (isFavorite) => {
  return isFavorite ? 0 : 1;
};
