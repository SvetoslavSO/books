import {
  getBooks,
  setBooks,
  setCurrentChunk,
  setLoading,
  setRequested,
  setEndOfChunks,
  setNumberOfBooks
} from "../books/actions"
import { takeEvery, put } from 'redux-saga/effects';
import { getBookRequest } from "../requests/getBookRequest";

function* settingData( chunk,items, booksNumber) {
  yield put(setRequested())
  yield put(setCurrentChunk(chunk));
  yield put(setNumberOfBooks(booksNumber))
  yield put(setLoading(false));
  yield put(setBooks(items));
}

export function* getBooksSagaRequest(action) {
  const success = yield getBookRequest(action.payload);
  if(success.items) {
    if(success.items.length < 30) {
      yield put(setEndOfChunks(true));
      yield settingData(0, success.items, success.totalItems)
    } else {
      yield settingData(action.payload.currentChunk + 1, success.items, success.totalItems)
    }
  } else {
    yield settingData(0, [], 0)
  }
}

export function* getBooksSaga() {
  yield takeEvery(getBooks, getBooksSagaRequest)
}