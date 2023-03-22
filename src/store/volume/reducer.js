import { createReducer } from '@reduxjs/toolkit';
import { setVolume, clearVolume, volumeLoading } from './actions';

const volumeStore = {
  volume: {
    image: '',
    title: '',
    categories: [],
    authors: [],
    description: ''
  },
  volumeLoading: true
}

export const volumeReducer = createReducer(volumeStore, {
  [setVolume.type] : (store, action) => {
    [store.volume.image, store.volume.title, store.volume.categories, store.volume.authors, store.volume.description] = action.payload
  },
  [clearVolume.type] : (store, action) => {
    [store.volume.image, store.volume.title, store.volume.categories, store.volume.authors, store.volume.description] = ['', '', [], [], '']
  },
  [volumeLoading.type] : (store, action) => {
    store.volumeLoading = action.payload
  }
})