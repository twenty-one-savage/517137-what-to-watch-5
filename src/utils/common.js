export const getRandomInteger = (a = 0, b = 1) => {
  const lower = Math.ceil(Math.min(a, b));
  const upper = Math.floor(Math.max(a, b));

  return Math.floor(lower + Math.random() * (upper - lower + 1));
};

export const generateGuid = () => {
  return `xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx`.replace(/[xy]/g, (c) => {
    let r = (Math.random() * 16) | 0;
    let v = c === `x` ? r : (r & 0x3) | 0x8;
    return v.toString(16);
  });
};

export const getRandomArrayElement = (arr) => {
  const randomIndex = getRandomInteger(0, arr.length - 1);
  return arr[randomIndex];
};

export const getFewRandomArrayElements = (arr) => {
  return arr
    .sort(() => 0.5 - Math.random())
    .slice(getRandomInteger(0, arr.length - 1));
};

export const clearAllTimeouts = () => {
  let maxId;
  maxId = setTimeout(function () {
  });
  while (maxId--) {
    clearTimeout(maxId);
  }
};

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
  } else if (value > 5 && value <= 8) {
    tag = tags.veryGood;
  } else if (value > 8) {
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
