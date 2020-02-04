import {
  SET_MENU,
  SET_DIMENSIONS,
  INCREMENT,
  BACKGROUND,
  BACKGROUND_COMPLETE
} from '../actions/types';

const initialState = {
  menu: false,
  w: window.innerWidth,
  h: window.innerHeight,
  count: 0,
  backgroundAnimation: false,
  backgroundComplete: false
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_MENU:
      return {
        ...state,
        menu: !state.menu
      };

    case SET_DIMENSIONS:
      return {
        ...state,
        w: action.payload.width,
        h: action.payload.height
      };

    case INCREMENT:
      return {
        ...state,
        count: state.count + 1
      };

    case BACKGROUND:
      return {
        ...state,
        backgroundAnimation: true
      };

    case BACKGROUND_COMPLETE:
      return {
        ...state,
        backgroundComplete: true
      };

    default:
      return state;
  }
};
