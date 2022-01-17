import { all, fork } from "redux-saga/effects"


import PictureSaga from "./pictures/saga"

export default function* rootSaga() {
  yield all([
    //public
  
    PictureSaga(),
    
    fork(PictureSaga),
  ])
}
