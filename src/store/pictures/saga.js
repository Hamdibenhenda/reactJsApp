// @flow
import { all, call, fork, takeEvery, put } from "redux-saga/effects"

import {
  CHANGE_PICTURE,
  CHANGE_PICTURE_X,
  CHANGE_PICTURE_Y,
} from "./actionTypes"

import {
  changeSidebarType as changeSidebarTypeAction,
  changeTopbarTheme as changeTopbarThemeAction,
} from "./actions"

/**
 * Changes the body attribute
 */
function changeBodyAttribute(attribute, value) {
  if (document.body) document.body.setAttribute(attribute, value)
  return true
}

/**
 * Toggle the class on body
 * @param {*} cssClass
 */
function manageBodyClass(cssClass, action = "toggle") {
  switch (action) {
    case "add":
      if (document.body) document.body.classList.add(cssClass)
      break
    case "remove":
      if (document.body) document.body.classList.remove(cssClass)
      break
    default:
      if (document.body) document.body.classList.toggle(cssClass)
      break
  }

  return true
}

/**
 * Changes the layout type
 * @param {*} param0
 */
function* changePicture({ payload: layout }) {
  // try {
  //   if (layout === "horizontal") {
  //     yield put(changeTopbarThemeAction("dark"))
  //     document.body.removeAttribute("data-sidebar")
  //     document.body.removeAttribute("data-sidebar-size")
  //   } else {
  //     yield put(changeTopbarThemeAction("light"))
  //   }
  //   yield call(changeBodyAttribute, "data-layout", layout)
  // } catch (error) { }
}

/**
 * Changes the picture width
 * @param {*} param0
 */
function* changepictureWidth({ payload: width }) {
  try {
    if (width ) {
     
      yield call(changeBodyAttribute, "data-focus-x", width)

    } 
  } catch (error) { }
}

/**
 * Changes the left sidebar theme
 * @param {*} param0
 */
function* changepictureHeight({ payload: height }) {
  try {
    if (height ) {
      yield call(changeBodyAttribute, "data-focus-y", height)

    } 
  } catch (error) { }
}




/**
 * Watchers
 */
export function* watchchangepictureType() {
  yield takeEvery(CHANGE_PICTURE, changePicture)
}

export function* watchchangepictureWidth() {
  yield takeEvery(CHANGE_PICTURE_X, changepictureWidth)
}

export function* watchchangepictureHeight() {
  yield takeEvery(CHANGE_PICTURE_Y, changepictureHeight)
}


function* LayoutSaga() {
  yield all([
    fork(watchchangepictureType),
    fork(watchchangepictureWidth),
    fork(watchchangepictureHeight),
  
  ])
}

export default LayoutSaga
