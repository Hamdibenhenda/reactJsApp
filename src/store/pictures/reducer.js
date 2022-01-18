// @flow
import {
  CHANGE_PICTURE_DESKTOP,
  CHANGE_PICTURE_POSITION_DESKTOP,
  CHANGE_PICTURE_MOBILE,
  CHANGE_PICTURE_POSITION_MOBILE,
} from "./actionTypes";

const INIT_STATE = {
  picture_url_desktop: "",
  picture_position_desktop: "",


  picture_url_mobile: "",
  picture_position_mobile: "",
  

};

const PictureState = (state = INIT_STATE, action) => {
  switch (action.type) {
    case CHANGE_PICTURE_DESKTOP:
      return {
        ...state,
        picture_url_desktop: action.payload,
      };

    case CHANGE_PICTURE_POSITION_DESKTOP:
      return {
        ...state,
        picture_position_desktop: action.payload,
      };

      case CHANGE_PICTURE_MOBILE:
        return {
          ...state,
          picture_url_mobile: action.payload,
        };
  
      case CHANGE_PICTURE_POSITION_MOBILE:
        return {
          ...state,
          picture_position_mobile: action.payload,
        };
     
    default:
      return state;
  }
};

export default PictureState;
