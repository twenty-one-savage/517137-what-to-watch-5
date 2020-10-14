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
    .sort(()=> 0.5 - Math.random())
    .slice(getRandomInteger(0, arr.length - 1));
};
