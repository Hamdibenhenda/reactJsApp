import { createStore, applyMiddleware, compose } from "redux"
import createSagaMiddleware from "redux-saga"

import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage'
import ReduxThunk from 'redux-thunk';

import rootReducer from "./pictures/reducer"
import rootSaga from "./sagas"

const sagaMiddleware = createSagaMiddleware()
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

// const store = createStore(
//   rootReducer,
//   composeEnhancers(applyMiddleware(sagaMiddleware))
// )
// sagaMiddleware.run(rootSaga)


const persistConfig = {
  key: 'root',
  storage,
  // blacklist: [],
  // whitelist: ["User"]
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = createStore(
  persistedReducer, 
  // {},
  composeEnhancers(applyMiddleware(ReduxThunk, sagaMiddleware))
)

sagaMiddleware.run(rootSaga)

export const persistor = persistStore(store);