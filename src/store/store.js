import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import createSagaMiddleware from "@redux-saga/core";
import { booksReducer } from './books/reducer';
import { volumeReducer } from "./volume/reducer";
import { getBooksSaga } from './sagas/getBooksSaga'; 
import { getChunkSaga } from "./sagas/getChunkSaga";
import { getVolumeSaga } from "./sagas/getVolumeSaga";

const sagaMiddleware = createSagaMiddleware()

export const rootReducers = combineReducers({
  books: booksReducer,
  volume: volumeReducer,
});

export const store = configureStore({ 
  reducer: rootReducers, 
  middleware: (getDefaultMiddleware) => getDefaultMiddleware()
    .concat(sagaMiddleware)
})

sagaMiddleware.run(getBooksSaga)
sagaMiddleware.run(getChunkSaga)
sagaMiddleware.run(getVolumeSaga);