import {
  getChunk,
  setBooks,
  setCurrentChunk,
  setEndOfChunks,
  setLoading,
} from "../books/actions"
import { takeEvery, put } from 'redux-saga/effects';
import { getBookRequest } from "../requests/getBookRequest";

export function* getChunkSagaRequest(action) {
  const success = yield getBookRequest(action.payload);
  if(success.items) {
    if(success.items.length < 30) {
      yield put(setCurrentChunk(0));
      yield put(setEndOfChunks(true));
      yield put(setLoading(false));
      yield put(setBooks(success.items));
    } else {
      yield put(setCurrentChunk(action.payload.currentChunk + 1));
      yield put(setLoading(false));
      yield put(setBooks(success.items));
    }
  } else {
    yield put(setCurrentChunk(0));
    yield put(setLoading(false));
    yield put(setEndOfChunks(true));
  }
}

export function* getChunkSaga() {
  yield takeEvery(getChunk, getChunkSagaRequest)
}