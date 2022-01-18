// @flow
import { all, call, fork, takeEvery, put } from "redux-saga/effects"

import {
  CHANGE_PICTURE_DESKTOP,
  CHANGE_PICTURE_POSITION_DESKTOP,
  
  CHANGE_PICTURE_MOBILE ,
  CHANGE_PICTURE_POSITION_MOBILE
} from "./actionTypes"


/**
 * Changes  picture desktop
 * @param {*} param0
 */
function* changePictureDesktop({ payload: PictureState }) {

}

/**
 * Changes the  cursor position x of picture desktop
 * @param {*} param0
 */
function* changePicturePositionDesktop({ payload: width }) {
  try {
    if (width ) {
     
      yield call(changePicturePositionDesktop, "data-focus-x", width)

    } 
  } catch (error) { }
}

/**
 * Changes the  cursor position y of picture desktop
 * @param {*} param0
 */




/**
 * Changes  picture mobile
 * @param {*} param0
 */
 function* changePictureMobile({ payload: PictureState }) {

}

/**
 * Changes the  cursor position x of picture Mobile
 * @param {*} param0
 */
function* changePicturePositionMobile({ payload: width }) {
  try {
    if (width ) {
     
      yield call(changePicturePositionMobile, "data-focus-x", width)

    } 
  } catch (error) { }
}

/**
 * Watchers
 */
export function* watchchangePictureDesktopType() {
  yield takeEvery(CHANGE_PICTURE_DESKTOP, changePictureDesktop)
}

export function* watchchangePicturePositionDesktop() {
  yield takeEvery(CHANGE_PICTURE_POSITION_DESKTOP, changePicturePositionDesktop)
}



export function* watchchangePictureMobileType() {
  yield takeEvery(CHANGE_PICTURE_MOBILE, changePictureMobile)
}

export function* watchchangePicturePositionMobile() {
  yield takeEvery(CHANGE_PICTURE_POSITION_MOBILE, changePicturePositionMobile)
}



function* PictureStateSaga() {
  yield all([
    fork(watchchangePictureDesktopType),
    fork(watchchangePicturePositionDesktop),
  
    fork(watchchangePictureMobileType),
    fork(watchchangePicturePositionMobile),
 
  
  ])
}

export default PictureStateSaga
