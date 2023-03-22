import { getVolume, setVolume, volumeLoading } from "../volume/actions"
import { takeEvery, put } from 'redux-saga/effects';
import { getVolumeRequest } from "../requests/getVolumeRequest";

export function* getVolumeSagaRequest(action) {
  const success = yield getVolumeRequest(action.payload);
  if(success) {
    console.log(success);
    const payload = [
      success.volumeInfo.imageLinks ? success.volumeInfo.imageLinks.thumbnail ? success.volumeInfo.imageLinks.thumbnail: '' : '',
      success.volumeInfo.title,
      success.volumeInfo.categories,
      success.volumeInfo.authors,
      success.volumeInfo.description
    ]
    yield put(setVolume(payload));
    yield put(volumeLoading(false));
  }
}

export function* getVolumeSaga() {
  yield takeEvery(getVolume, getVolumeSagaRequest)
}