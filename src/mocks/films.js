import {Film} from "../const";
import {generateId, getRandomInteger, getRandomArrayElement, getFewRandomArrayElements} from "../utils/common";
import momentRandom from "moment-random";

const filmTitles = [
  `Aviator`,
  `Bohemian rhapsody`,
  `The Grand Budapest hotel`,
  `Fantastic beasts the crimes`,
  `Johny English`,
  `Macbeth`,
  `Midnight special`,
  `Snatch`
];

const filmPosters = [
  `img/the-grand-budapest-hotel-poster.jpg`,
  `img/aviator.jpg`,
  `img/bohemian-rhapsody.jpg`,
  `img/fantastic-beasts-the-crimes-of-grindelwald.jpg`,
  `img/johnny-english.jpg`,
  `img/macbeth.jpg`,
  `img/midnight-special.jpg`,
  `img/snatch.jpg`
];

const filmBackgrounds = [
  `img/bg-header.jpg`,
  `img/bg-the-grand-budapest-hotel.jpg`
];

const filmGenres = [
  `Action`,
  `Adventure`,
  `Comedy`,
  `Crime`,
  `Drama`,
  `Fantasy`,
  `Urban`,
  `Romance`
];

const filmStorylines = [
  `Believing they have left behind shadowy figures from their past, newlyweds Christian and Ana fully embrace an inextricable connection and shared life of luxury. But just as she steps into her role as Mrs. Grey and he relaxes into an unfamiliar stability, new threats could jeopardize their happy ending before it even begins.`,
  `After the events of Captain America: Civil War, King T'Challa returns home to the reclusive, technologically advanced African nation of Wakanda to serve as his country's new leader. However, T'Challa soon finds that he is challenged for the throne from factions within his own country. When two foes conspire to destroy Wakanda, the hero known as Black Panther must team up with C.I.A. agent Everett K. Ross and members of the Dora Milaje, Wakandan special forces, to prevent Wakanda from being dragged into a world war.`,
  `Two officers with patriotic hearts suddenly have a fallout. The mentor, Colonel Abhay Singh has complete faith in the country's system while prot\u00e9g\u00e9 Major Jai Bakshi thinks differently due to a recent stint in surveillance.`,
  `A young woman is forced to reflect on her first relationship when she inadvertently moves into her ex-boyfriend's apartment building.`,
  `A Hebrew with an unusual gift of strength must respond properly to the call of God on his life in order to lead his people out of enslavement. After his youthful ambition leads to a tragic marriage, his acts of revenge thrust him into direct conflict with the Philistine army. As his brother mounts a tribal rebellion, only Samson's relationship with a Philistine seductress and his final surrender - both to the Philistines and to God - turns imprisonment and blindness into final victory.`,
  `Inspired by true events. On an isolated stretch of land 50 miles outside of San Francisco sits the most haunted house in the world. Built by Sarah Winchester, (Academy Award\u00ae-winner Helen Mirren) heiress to the Winchester fortune, it is a house that knows no end. Constructed in an incessant twenty-four hour a day, seven day a week mania for decades, it stands seven stories tall and contains hundreds of rooms. To the outsider it looks like a monstrous monument to a disturbed woman's madness. But Sarah is not building for herself, for her niece (Sarah Snook) or for the brilliant Doctor Eric Price (Jason Clarke) whom she has summoned to the house. She is building a prison, an asylum for hundreds of vengeful ghosts, and the most terrifying among them have a score to settle with the Winchesters.`,
  `When American military analyst, Daniel Ellsberg, realizes to his disgust the depths of the US government's deceptions about the futility of the Vietnam War, he takes action by copying top-secret documents that would become the Pentagon Papers. Later, Washington Post owner, Kay Graham, is still adjusting to taking over her late husband's business when editor Ben Bradlee discovers the New York Times has scooped them with an explosive expose on those papers. Determined to compete, Post reporters find Ellsberg himself and a complete copy of those papers. However, the Post's plans to publish their findings are put in jeopardy with a Federal restraining order that could get them all indicted for Contempt. Now, Kay Graham must decide whether to back down for the safety of her paper or publish and fight for the Freedom of the Press. In doing so, Graham and her staff join a fight that would have America's democratic ideals in the balance.`,
  `From master storyteller Guillermo del Toro comes THE SHAPE OF WATER, an otherworldly fable set against the backdrop of Cold War era America circa 1962. In the hidden high-security government laboratory where she works, lonely Elisa (Sally Hawkins) is trapped in a life of isolation. Elisa's life is changed forever when she and co-worker Zelda (Octavia Spencer) discover a secret classified experiment. Rounding out the cast are Michael Shannon, Richard Jenkins, Michael Stuhlbarg, and Doug Jones.`
];

const filmProducers = [
  `Wes Anderson`,
  `Steven Spielberg`,
  `Clint Eastwood`,
  `Brian Gazer`,
  `Frank Marshall`,
  `Walt Disney`,
  `Alfred Hitchcock`,
  `Peter Jackson`,
  `Guy Ritchie`,
  `Martin Scorsese`
];

const filmActors = [
  `Chadwick Boseman`,
  `Michael B. Jordan`,
  `Lupita Nyong'o`,
  `Tom Hiddleston`,
  `Eddie Redmayne`,
  `Maisie Williams`,
  `Maryana Spivak`,
  `Aleksey Rozin`,
  `Matvey Novikov`,
  `Timothy Spall`
];

const filmVideos = [
  `https://upload.wikimedia.org/wikipedia/commons/2/20/Aunt_Sallie%27s_Wonderful_Bustle_%281901%29.webm`,
  `https://upload.wikimedia.org/wikipedia/commons/transcoded/7/7d/Electrical_typewriter_by_IBM_from_1988.webm/Electrical_typewriter_by_IBM_from_1988.webm.480p.webm`,
  `https://upload.wikimedia.org/wikipedia/commons/transcoded/8/86/F%E2%80%9315_Eagle.ogv/F%E2%80%9315_Eagle.ogv.480p.webm`,
  `https://upload.wikimedia.org/wikipedia/commons/transcoded/f/f3/STS-92_launch.ogv/STS-92_launch.ogv.120p.vp9.webm`,
  `https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm`,
  `https://upload.wikimedia.org/wikipedia/commons/c/c9/X-38_research_aircraft_fifth_test_drop_flight.ogv`,
  `https://upload.wikimedia.org/wikipedia/commons/transcoded/f/f5/South_Sudan_The_Comprehensive_Peace_Agreement_on_Life_Support_%28Part_2_of_3%29.webm/South_Sudan_The_Comprehensive_Peace_Agreement_on_Life_Support_%28Part_2_of_3%29.webm.480p.vp9.webm`,
  `https://upload.wikimedia.org/wikipedia/commons/transcoded/5/52/HD_189733b_passing_in_front_of_its_star_with_zoom_%28artist%27s_impression%29.webm/HD_189733b_passing_in_front_of_its_star_with_zoom_%28artist%27s_impression%29.webm.480p.vp9.webm`
];

const generateFilmYear = () => {
  return momentRandom().format(`YYYY`);
};

const generateFilmDuration = () => {
  return {
    hours: momentRandom().format(`h`),
    minutes: momentRandom().format(`mm`),
  };
};

const generateFilmRating = () => {
  const tags = {
    bad: `Bad`,
    normal: `Normal`,
    good: `Good`,
    veryGood: `Very good`,
    awesome: `Awesome`
  };

  let tag = null;

  let value = (Math.random() * (Film.RATING.max)).toFixed(1);

  if (value <= 3) {
    tag = tags.bad;
  } else if (value > 3 && value <= 5) {
    tag = tags.normal;
  } else if (value > 5 && value <= 8) {
    tag = tags.veryGood;
  } else if (value > 8) {
    tag = tags.awesome;
  }

  return {
    value,
    tag
  };
};

const generateFilm = () => {
  return {
    id: generateId(),
    poster: getRandomArrayElement(filmPosters),
    background: getRandomArrayElement(filmBackgrounds),
    title: getRandomArrayElement(filmTitles),
    video: getRandomArrayElement(filmVideos),
    genres: getFewRandomArrayElements(filmGenres),
    year: generateFilmYear(),
    storyline: getRandomArrayElement(filmStorylines),
    rating: generateFilmRating(),
    poll: getRandomInteger(0, 100),
    producer: getRandomArrayElement(filmProducers),
    duration: generateFilmDuration(),
    actors: getFewRandomArrayElements(filmActors)
  };
};


export const generateFilms = () => {
  return new Array(Film.COUNT.main).fill().map(generateFilm);
};
