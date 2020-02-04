import {
  SET_MENU,
  SET_DIMENSIONS,
  INCREMENT,
  BACKGROUND,
  BACKGROUND_COMPLETE
} from './types';

// Change menu's state
export const setMenu = () => {
  return {
    type: SET_MENU
  };
};

// Set screen width
export const setDimensions = object => {
  return {
    type: SET_DIMENSIONS,
    payload: object
  };
};

// Set animation count
export const increment = () => {
  return {
    type: INCREMENT
  };
};

// Set background animation
export const background = () => {
  return {
    type: BACKGROUND
  };
};

// Set background animation
export const backgroundCompFunc = () => {
  return {
    type: BACKGROUND_COMPLETE
  };
};
