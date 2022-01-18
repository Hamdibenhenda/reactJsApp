import {
  CHANGE_PICTURE_DESKTOP,
  CHANGE_PICTURE_POSITION_DESKTOP,
  
   CHANGE_PICTURE_MOBILE,
   CHANGE_PICTURE_POSITION_MOBILE,



} from "./actionTypes"

export const changePictureDesktop = picture => ({

  type: CHANGE_PICTURE_DESKTOP,
  payload: picture,

})

export const changePicturePositionDesktop = width => ({
  type:  CHANGE_PICTURE_POSITION_DESKTOP,
  payload: width,
})



export const changePictureMobile = picture => ({

  type: CHANGE_PICTURE_MOBILE,
  payload: picture,

})

export const changePicturePositionMobile = width => ({
  type:  CHANGE_PICTURE_POSITION_MOBILE,
  payload: width,
})

