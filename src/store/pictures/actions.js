import {
  CHANGE_PICTURE,
   CHANGE_PICTURE_X,
   CHANGE_PICTURE_Y,



} from "./actionTypes"

export const changePicture = picture => ({

  type: CHANGE_PICTURE,
  payload: picture,

})

export const changePictureWidth = width => ({
  type:  CHANGE_PICTURE_X,
  payload: width,
})

export const changePictureHeight = height => ({
  type:  CHANGE_PICTURE_Y,
  payload: height,
})
