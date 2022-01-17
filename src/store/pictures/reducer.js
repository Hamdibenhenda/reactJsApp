// @flow
import {
  CHANGE_PICTURE,
  CHANGE_PICTURE_X,
  CHANGE_PICTURE_Y,
} from "./actionTypes";

const INIT_STATE = {
  picture_url: "",
  pictureWidth: "",
  pictureHeight: "",
};

const Layout = (state = INIT_STATE, action) => {
  switch (action.type) {
    case CHANGE_PICTURE:
      return {
        ...state,
        picture_url: action.payload,
      };

    case CHANGE_PICTURE_X:
      return {
        ...state,
        pictureWidth: action.payload,
      };
    case CHANGE_PICTURE_Y:
      return {
        ...state,
        pictureHeight: action.payload,
      };

    default:
      return state;
  }
};

export default Layout;
